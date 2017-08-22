import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import {HashRouter as Router, Route} from 'react-router-dom';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  // selectAlbum (albumId) {
  //   axios.get(`/api/albums/${albumId}`)
  //     .then(res => res.data)
  //     .then(album => this.setState({
  //       selectedAlbum: album
  //     }));
  // }

  // deselectAlbum () {
  //   this.setState({ selectedAlbum: {}});
  // }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <Router>
        <div className="col-xs-10">
          <Route
            exact
            path='/'
            component = {AllAlbums}
          />
          <Route
            exact
            path='/albums'
            component = {AllAlbums}
          />
          <Route
          path="/albums/:albumId"
          component = {SingleAlbum}
        />          
        </div>
        </Router>
        <Player />
      </div>
    );
  }
}
