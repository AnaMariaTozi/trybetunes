import React from 'react';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';

const { Route, BrowserRouter } = require('react-router-dom');

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Route path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />

        </BrowserRouter>

      </>
    );
  }
}

export default App;
