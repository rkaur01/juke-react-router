import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums'

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
        console.log(data)
        this.setState({selectedArtist: data[0].data })
        this.setState({artistAlbums: data[1].data })
        this.setState({artistSongs: data[2].data })
      });

  }

  render () {
    const artist = this.state.selectedArtist;
    const albums = this.state.artistAlbums;
    const songs = this.state.artistSongs;
    console.log('what are the artist props', this.props.match.params)
    console.log('what are the album props for a single artist', this.state.artistAlbums)

    return( 
        <div>
            <h3>{artist.name}</h3>
            <AllAlbums albums={albums}/>
            <div className='col-xs-10'>
                <h4>SONGS</h4>
                    <Songs songs={songs} />
            </div>
        </div>
    )
  }
}