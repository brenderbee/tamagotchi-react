import React from 'react';
import Error404 from './Error404';
import ActionBar from './ActionBar';
import Neutral from './Neutral';
import StatusBar from './StatusBar';
import { Switch, Route } from 'react-router-dom';
import Age from './Age';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterHunger: 100,
      masterPlay: 100,
      masterCleanliness: 0,
      masterAge: 0
    };
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleCleanClick = this.handleCleanClick.bind(this);
  }

  componentDidMount() {
    setInterval(() =>
      this.updateHunger(),
      1000
    );
    setInterval(() =>
      this.updatePlay(),
      1000
    );
    setInterval(() =>
      this.updateCleanliness(),
      10000
    );
  }

  componentWillUnmount(){
    console.log("unmount");
    clearInterval(this.updateHunger);
    clearInterval(this.updatePlay);
    clearInterval(this.updateCleanliness);
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

  updateHunger() {
    this.setState({masterHunger: (this.state.masterHunger - 1)});
  }

  updatePlay() {
    this.setState({masterPlay: (this.state.masterPlay - 1)});
  }

  updateCleanliness() {
    this.setState({masterCleanliness: (this.state.masterCleanliness + 1)});
  }

  render(){
    return (
      <div className="container">
        <Age age={this.state.masterAge} />
        <StatusBar
          hunger={this.state.masterHunger}
          play={this.state.masterPlay}
          cleanliness={this.state.masterCleanliness}
        />
        <Switch>
          <Route exact path='/'
            render={()=>
              <Neutral
                componentWillUnmount={this.componentWillUnmount}
                hunger={this.state.masterHunger}
                play={this.state.masterPlay}
                cleanliness={this.state.masterCleanliness}
              />}
          />
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
