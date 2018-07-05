import React from 'react';
import PropTypes from 'prop-types';

function Neutral(props) {

  function life(imageUrl) {
    return(
      <div>
        <img src={imageUrl}/>
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

  if (props.hunger < 1 || props.play < 1  || props.cleanliness > 3) {
    return(
      life('https://media.giphy.com/media/etUKoAn6ni3sv0UkfU/giphy.gif')
    );
  } else {
    return(
      life('https://media.giphy.com/media/l3q2tvaYp4KseN22A/giphy.gif')
    );
  }


}

Neutral.propTypes = {
  hunger: PropTypes.number,
  play: PropTypes.number,
  cleanliness: PropTypes.number,
  componentWillUnmount: PropTypes.func
};

export default Neutral;
