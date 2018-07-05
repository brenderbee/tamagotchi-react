import React from 'react';
import PropTypes from 'prop-types';

function StatusBar(props) {

  return(
    <div className="status-bar">
      <div className="stats">
        <h3>Hunger</h3>
        <p>{props.hunger}</p>
      </div>
      <div className="stats">
        <h3>Play</h3>
        <p>{props.play}</p>
      </div>
      <div className="stats">
        <h3>Cleanliness</h3>
        <p>{'poop '.repeat(props.cleanliness)}</p>
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

StatusBar.propTypes = {
  hunger: PropTypes.number,
  play: PropTypes.number,
  cleanliness: PropTypes.number
};

export default StatusBar;
