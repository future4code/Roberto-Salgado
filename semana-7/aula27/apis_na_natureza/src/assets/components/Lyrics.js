import React from 'react'
import axios from 'axios' // eslint-disable-next-line
import styled from 'styled-components'
import { lyricsUrl } from '../constants/axiosConstants'

export class Lyrics extends React.Component {
  state = {
    artist: '',
    title: '',
    lyrics: ''
  }

  getLyrics = (artist, title) => {
    axios
      .get(`${lyricsUrl}/${artist}/${title}`)
      .then(response => {
        this.setState({lyrics: response.data.lyrics})
        console.log(response.data.lyrics)
      })
      .catch(error => {
        console.log(error)
      })
  }

  onChangeArtist = e => {
    this.setState({artist: e.target.value})
  }
  
  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  render() {

    const artistSearch = this.state.artist
    const titleSearch = this.state.title

    return(
      <div>
        <h1>Buscar Letra da Música</h1>
        <label htmlFor={'artist'}>Artista: </label>
        <input 
          required
          name='artist'
          type='text'
          value={ this.state.artist }
          onChange={ this.onChangeArtist }
        />
        <br /><br />
        <label htmlFor={'title'}>Título: </label>
        <input 
          required
          name='title'
          type='text'
          value={ this.state.title }
          onChange={ this.onChangeTitle }
        />
        <br /><br />
        <button 
          onClick={() => this.getLyrics(artistSearch, titleSearch)}
        >
          Buscar
        </button>
        <p>
          {this.state.lyrics}
        </p>
      </div>
    )
  }
}