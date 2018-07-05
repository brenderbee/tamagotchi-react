import React from 'react';
import PropTypes from 'prop-types';

function ActionBar(props){
  return (
    <div className="action">
      <button onClick={props.handleFeedClick}>feed</button>
      <button onClick={props.handlePlayClick}>play</button>
      <button onClick={props.handleCleanClick}>clean</button>
      <style jsx>
        {`
          button {
            margin-right: 10px;
            transition: background 0.3s ease-in-out;
          }

          button:hover {
            cursor: pointer;
            background: blue;
          }
        `}
      </style>
    </div>
  );
}

ActionBar.propTypes = {
  handleFeedClick: PropTypes.func,
  handlePlayClick: PropTypes.func,
  handleCleanClick: PropTypes.func
};

export default ActionBar;
