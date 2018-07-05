import React from 'react';


class StatusBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      play: 10,
      cleanliness: 0
    };
  }
  render() {
    return(
      <div className="status-bar">
        <div className="stats">
          <h3>Hunger</h3>
          <p>{this.state.hunger}</p>
        </div>
        <div className="stats">
          <h3>Play</h3>
          <p>{this.state.play}</p>
        </div>
        <div className="stats">
          <h3>Cleanliness</h3>
          <p>{'poop '.repeat(this.state.cleanliness)}</p>
        </div>
        <style jsx>
          {`
            .status-bar {
              display: flex;
              justify-content: space-between;
              margin-bottom: 2rem;
            }

            .stats {
              margin-right: 2rem;
              text-align: center;
            }

            .stats:first-child {
              margin-left: 2rem;
            }

            svg {
              height: 1.6rem;
            }
            `}
        </style>
      </div>
    );

  }
}

export default StatusBar;
