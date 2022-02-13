import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardAlbuns extends Component {
  render() {
    const {
      artistName,
      collectionName,
      collectionId,
      collectionPrice,
      artworkUrl100,
      trackCount,
    } = this.props;
    return (
      <section>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <h1>{artistName}</h1>
        </Link>
        <img src={ artworkUrl100 } alt={ artistName } />
        <p>{ `Nome do álbum: ${collectionName}` }</p>
        <p>{`qtd Tracks: ${trackCount}`}</p>
        <p>{`Preço: ${collectionPrice}`}</p>
      </section>
    );
  }
}

CardAlbuns.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionPrice: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  trackCount: PropTypes.number.isRequired,
};

export default CardAlbuns;
