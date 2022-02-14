import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CardMusic extends Component {
  render() {
    const {
      musicName,
      musicNumber,
      previewUrl,
    } = this.props;

    return (
      <div>
        <p>{`${musicNumber} - ${musicName}`}</p>
        <p>{musicName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <p>
            O seu navegador não suporta o elemento
          </p>
          <code>audio</code>
        </audio>
      </div>
    );
  }
}

CardMusic.propTypes = {
  musicName: PropTypes.string.isRequired,
  musicNumber: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default CardMusic;
