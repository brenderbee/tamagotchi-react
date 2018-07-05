import React from 'react';
import PropTypes from 'prop-types';

function ActionBar(props){
  return (
    <div className="action">
      <button onClick={props.onHandleFeedClick}>feed</button>
      <button onClick={props.onHandlePlayClick}>play</button>
      <button onClick={props.onHandleCleanClick}>clean</button>
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
  onHandleFeedClick: PropTypes.func,
  onHandlePlayClick: PropTypes.func,
  onHandleCleanClick: PropTypes.func
};

export default ActionBar;
