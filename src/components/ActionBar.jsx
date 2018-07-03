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
          }
        `}
      </style>
    </div>
  );
}

export default ActionBar;
