import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musicList: [],
      album: '',
      artist: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    const getMusic = musicList.filter(({ trackId }) => trackId);
    this.setState({
      musicList: getMusic,
      album: musicList[0].collectionName,
      artist: musicList[0].artistName,
    });
  }

  render() {
    const { musicList, album, artist } = this.state;
    return (
      <div
        data-testid="page-album"
      >
        <Header />
        <h3 data-testid="album-name">{ album }</h3>
        <h3 data-testid="artist-name">{ artist }</h3>
        { musicList.map((music, index) => (
          <MusicCard
            key={ index }
            trackName={ music.trackName }
            previewUrl={ music.previewUrl }
          />
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
