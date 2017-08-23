import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import {HashRouter as Router, Route} from 'react-router-dom';
import SingleArtist from './SingleArtist'
import AllArtists from './AllArtists'
import NotFound from './NotFound'

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Router>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">
          <Route
            exact
            path='/'
            component = {StatefulAlbums}
          />
          <Route
            exact
            path='/albums'
            component = {StatefulAlbums}
          />
          <Route
           path="/albums/:albumId"
           component = {SingleAlbum}
          />
          <Route
            exact
            path='/artists'
            component = {AllArtists}
          />
          <Route
          path="/artists/:artistId"
          component = {SingleArtist}
          />
          <Route component={NotFound} />                  
        </div>
        <Player />
        </div>
        </Router>
    );
  }
}
