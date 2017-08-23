import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums'
import {HashRouter as Router, Route} from 'react-router-dom';

export default class SingleAlbum extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedArtist: {},
      artistAlbums: [],
      artistSongs: []
    };
  }

  componentDidMount () {
    const artistId = this.props.match.params.artistId

    Promise.all([axios.get(`/api/artists/${artistId}`), axios.get(`/api/artists/${artistId}/albums`), axios.get(`/api/artists/${artistId}/songs`)])
    .then(data => {
        this.setState({selectedArtist: data[0].data })
        this.setState({artistAlbums: data[1].data })
        this.setState({artistSongs: data[2].data })
      });

  }

  render () {
    const artist = this.state.selectedArtist;
    const albums = this.state.artistAlbums;
    const songs = this.state.artistSongs;

    return (
      <Router>
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><NavLink 
          to={`/artists/${artist.id}/albums`}
          activeStyle={{
            fontWeight: 'bold',
            color: '#aaaaee'
          }}
          >ALBUMS</NavLink></li>
          <li><NavLink 
          to={`/artists/${artist.id}/songs`}
          activeStyle={{
            fontWeight: 'bold',
            color: '#aaaaee'
          }}
          >SONGS</NavLink></li>
        </ul>
       
        {/* Routes will go here! */}
          <Route
            path={`/artists/${artist.id}/albums`}
            render={() => <AllAlbums albums={albums} />}
          />
          <Route
          path={`/artists/${artist.id}/songs`}
          render={() => <Songs songs={songs} />}
          />        
        
      </div>
      </Router>
    );
  }
}