import React from 'react';

function ActionBar(){
  return (
    <div className="action">
      <button>play</button>
      <button>feed</button>
      <button>clean</button>
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

export default ActionBar;
