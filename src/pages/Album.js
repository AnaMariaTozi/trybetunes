import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albumName: '',
      artist: '',
      favoriteSongs: [],
      musicList: [],
      loading: false,
    };
    this.handleFavoriteSong = this.handleFavoriteSong.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const allAlbuns = await getMusics(id);
    const albuns = allAlbuns.slice(1);
    const favoriteSongsList = await getFavoriteSongs();
    this.setState({
      albumName: allAlbuns[0].collectionName,
      artist: allAlbuns[0].artistName,
      musicList: albuns,
      loading: false,
      favoriteSongs: favoriteSongsList,
    });
  }

  async handleFavoriteSong(trackId) {
    const { musicList } = this.state;
    const onMusic = musicList.find((music) => music.trackId === trackId);
    this.setState({ loading: true });
    await addSong(onMusic);
    this.setState((prevState) => ({
      loading: false,
      favoriteSongs: [...prevState.favoriteSongs, onMusic] }));
  }

  render() {
    const { musicList, albumName, artist, favoriteSongs, loading } = this.state;

    return (

      <div data-testid="page-album">

        <Header />

        <h3 data-testid="album-name">{ albumName }</h3>
        <h3 data-testid="artist-name">{ artist }</h3>
        { loading ? <Loading />
          : (
            <>
              { musicList.map((music) => (
                <MusicCard
                  key={ music.trackId }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  data-testid={ music.trackId }
                  trackId={ music.trackId }
                  onClick={ this.handleFavoriteSong }
                  onChecked={ favoriteSongs
                    .some((favorite) => favorite.trackId === music.trackId) }
                />

              ))}
            </>
          )}
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
