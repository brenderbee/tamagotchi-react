import React from 'react';
import PropTypes from 'prop-types';

function Neutral(props) {

  if (props.hunger < 1 || props.play < 1  || props.cleanliness > 6) {
    return(
      <div>
        <p>dead</p>
      </div>
    );
  } else {
    return(
      <div>
        <img src="https://i.gifer.com/AhKf.gif"/>
        <style jsx>
          {`
            img {
              margin-bottom: 2rem;
            }
          `}
        </style>
      </div>
    );
  }


}

Neutral.propTypes = {
  hunger: PropTypes.number,
  play: PropTypes.number,
  cleanliness: PropTypes.number
};

export default Neutral;
