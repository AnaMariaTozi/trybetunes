import React, { Component } from 'react';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';

const { Route, BrowserRouter, Switch } = require('react-router-dom');

class App extends Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
