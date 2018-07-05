import React from 'react';
import Error404 from './Error404';
import ActionBar from './ActionBar';
import Neutral from './Neutral';
import StatusBar from './StatusBar';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterHunger: 100,
      masterPlay: 100,
      masterCleanliness: 1
    };
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleCleanClick = this.handleCleanClick.bind(this);
  }

  handleFeedClick() {
    console.log('you clicked feed');
  }

  handlePlayClick() {
    console.log('you clicked play');
  }

  handleCleanClick() {
    console.log('you clicked clean');
  }

  render(){
    return (
      <div className="container">
        <StatusBar
            hunger={this.state.masterHunger}
            play={this.state.masterPlay}
            cleanliness={this.state.masterCleanliness}
        />
        <Switch>
          <Route exact path='/' component={Neutral}/>} />
          <Route component={Error404} />
        </Switch>
        <ActionBar handleFeedClick={this.handleFeedClick}
          handlePlayClick={this.handlePlayClick}
          handleCleanClick={this.handleCleanClick}/>
        <style jsx global>
          {`
            body {
              font-family: 'Helvetica', sans-serif;
              font-size: 1rem;
            }

            button {
              text-transform: uppercase;
              font-size: 1rem;
              padding: 1rem;
              color: white;
              border-radius: 10px;
              font-weight: 300;
              background: #8500ff;
              border: none
            }

            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 10rem;
            }
            `}
        </style>
      </div>
    );
  }
}


export default App;
