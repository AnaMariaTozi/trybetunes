import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import Loading from './Loading';

class MusicCard extends Component {
  render() {
    const {
      trackName,
      previewUrl,
      trackId,
      onClick,
      onChecked,
    } = this.props;
    
    return (
      <div>
        <label htmlFor={ trackId }>
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            id={ trackId }
            onClick={ () => onClick(trackId) }
            checked={ onChecked }
          />
        </label>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>

        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
