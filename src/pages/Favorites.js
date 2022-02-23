import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      favoriteSongs: [],
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();
    favoriteSongs.forEach((item) => { item.checked = true; });
    this.setState({
      favoriteSongs,
      loading: false,
    });
  }

  handleCheckbox = async (id) => {
    const { favoriteSongs } = this.state;
    this.setState({ loading: true });
    const favorite = favoriteSongs.find((item) => item.trackId === id);
    if (favorite) {
      await removeSong(favorite);
      const favoriteList = favoriteSongs.filter((e) => e.trackId !== id);
      this.setState({
        loading: false,
        favoriteSongs: [...favoriteList],
      });
    }
  }

  render() {
    const { favoriteSongs, loading } = this.state;
    return (

      <div data-testid="page-favorites">
        Favorites
        <Header />

        {loading
          ? <Loading />
          : (favoriteSongs.map((music) => (
            <>
              <img
                src={ music.artworkUrl100 }
                alt={ `${music.collectionName} from ${music.artistName}` }
              />
              <h3>{ music.artistName }</h3>
              <h4>{ music.collectionName }</h4>
              <MusicCard
                { ...music }
                onChecked={ music.checked }
                onClick={ this.handleCheckbox }
              />
            </>
          )))}

      </div>
    );
  }
}

export default Favorites;
