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
      masterHunger: 70,
      masterPlay: 50,
      masterCleanliness: 3
    };
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleCleanClick = this.handleCleanClick.bind(this);
  }

  handleFeedClick() {
    if (this.state.masterHunger < 91) {
      this.setState({masterHunger: (this.state.masterHunger + 10)});
    } else {
      this.setState({masterHunger: 100});
    }
  }

  handlePlayClick() {
    if (this.state.masterPlay < 91) {
      this.setState({masterPlay: (this.state.masterPlay + 10)});
    } else {
      this.setState({masterPlay: 100});
    }
  }

  handleCleanClick() {
    if (this.state.masterCleanliness > 0) {
      this.setState({masterCleanliness: (this.state.masterCleanliness - 1)});
    }
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
        <ActionBar
          onHandleFeedClick={this.handleFeedClick}
          onHandlePlayClick={this.handlePlayClick}
          onHandleCleanClick={this.handleCleanClick}
        />
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
