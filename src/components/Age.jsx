import React from 'react';
import PropTypes from 'prop-types';

function Age(props) {

  return(
    <div className="age">
      <h3>Age</h3>
      <p>{props.age}</p>
      <style jsx>
        {`
          .age {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

Age.propTypes = {
  age: PropTypes.number
};


export default Age;
