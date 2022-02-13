import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import CardAlbuns from '../components/CardAlbuns';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      btnDisable: true,
      loading: false,
      foundAlbum: '',
      albuns: [],
      searchSucceed: false,

    };
  }

  handleSubmitt = async () => {
    const { searchInput } = this.state;
    this.setState(({ searchInput: '', loading: true }));

    const getAlbuns = await searchAlbumsAPI(searchInput);
    this.setState({
      loading: false,
      albuns: getAlbuns,
      searchSucceed: true,
    });
  }

handleChange = ({ target: { value } }) => {
  this.setState({
    searchInput: value,
    foundAlbum: value,
  });
}

render() {
  const { searchInput, loading, foundAlbum, albuns, searchSucceed } = this.state;
  const MIN_CHARACTERS = 2;

  if (loading) return <Loading />;

  return (

    <div data-testid="page-search">
      <Header />
      <h1>Pesquisa</h1>

      <form>
        <label htmlFor="search-artist">
          Nome do Artista
          <input
            type="text"
            name="nome-artista"
            data-testid="search-artist-input"
            value={ searchInput }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="search-artist-button"
          name="pesquisar"
          type="submit"
          disabled={ searchInput.length < MIN_CHARACTERS }
          onClick={ this.handleSubmitt }
        >
          Pesquisar

        </button>
      </form>
      { (searchSucceed) && `Resultado de álbuns de: ${foundAlbum}`}
      {
        (albuns.length > 0)
          ? (<section>
            { albuns.map((album) => (
              <CardAlbuns
                key={ album.artistName }
                artistName={ album.artistName }
                collectionName={ album.collectionName }
                collectionId={ album.collectionId }
                collectionPrice={ album.collectionPrice }
                artworkUrl100={ album.artworkUrl100 }
                trackCount={ album.trackCount }
              />
            ))}
        </section>
          ) : <h2>Nenhum álbum foi encontrado</h2>
      }
    </div>

  );
}
}
