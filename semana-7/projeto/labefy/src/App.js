import React from 'react'
import axios from 'axios'
import { CreatePlaylist } from './assets/components/CreatePlaylist'
import { Playlists } from './assets/components/Playlists'
import { PlaylistTracks } from './assets/components/PlaylistTracks'
import {
  AppContainer,
  ToggleSection
} from './assets/styles/Styles'
import {
  baseUrl,
  axiosConfig
} from './assets/constants/axiosConstants'

export default class App extends React.Component {
  state = {
    playlists: [],
    nameValue: '',
    emailValue: '',
    nameSearch: '',
    currentSection: '',
    playlistData: {},
    playlistTracks: [],
    addingTrack: false,
    newTrack: '',
    newTrackArtist: '',
    newTrackUrl: ''
  }

  toggleSection = () => {
    const section = this.state.currentSection
    this.setState({
      currentSection: section === 'playlistTracks' ? 'playlists' : (
        section === 'playlists' ? 'createPlaylist' : 'playlists' 
      ),
      addingTrack: false
    })
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig)
      this.setState({ playlists: response.data.result.list })
      // console.log(this.state.playlists)
    } catch (error) {
      console.log(`Ocorreu um erro: ${ error.message }`)
    }
  }

  createPlaylist = async () => {
    const body = {
      name: this.state.nameValue
    }
    try {
      await axios.post(baseUrl, body, axiosConfig)
      alert(`Playlist ${ this.state.nameValue } criada com sucesso`)
      this.toggleSection()
      this.setState({
        nameValue: ''
      })
    } catch (error) {
      console.log(`Ocorreu um erro: ${ error.message }`)
    }
  }

  deletePlaylist = async (playlist) => {
    const result = window.confirm('Tem certeza de que deseja deletar?')
    if(result) {
      try {
        await axios.delete(`${ baseUrl }/${ playlist.id }`, axiosConfig)
        alert(`Playlist ${ playlist.name } removida`)
        this.getAllPlaylists()
        this.setState({ currentSection: 'playlists' })
      } catch (error) {
        console.log(`Ocorreu um erro: ${ error.message }`)
      }
    }
  }

  getPlaylistTracks = async (playlist) => {
    try {
      const response = await axios.get(`${ baseUrl }/${ playlist.id }/tracks`, axiosConfig)
      this.setState({
        playlistData: { ...playlist },
        playlistTracks: response.data.result.tracks,
        currentSection: 'playlistTracks'
      })
      // console.log(this.state.playlistData)
      // console.log(this.state.playlistTracks)
    } catch (error) {
      console.log(`Ocorreu um erro: ${ error.message}`)
    }
  }

  addTrackToPlaylist = async (playlist) => {
    const body = {
      name: this.state.newTrack,
      artist: this.state.newTrackArtist,
      url: this.state.newTrackUrl
    }
    try {
      await axios.post(`${baseUrl}/${playlist.id}/tracks`, body, axiosConfig)
      alert(
        `Faixa ${this.state.newTrack} por ${this.state.newTrackArtist} adicionado a Playlist ${playlist.name}.`
      )
      this.getPlaylistTracks(playlist)
      this.setState({
        addingTrack: false,
        newTrack: '',
        newTrackArtist: '',
        newTrackUrl: ''
      })
    } catch (error) {
      console.log(`Ocorreu um erro: ${error.message}`)
    }
  }

  // searchPlaylist = async (name) => {
  //   this.getAllPlaylists()
  //   try {
  //     const response = await axios.get(`${ baseUrl }/search?name=${ name }`, axiosConfig)
  //     const filteredPlaylists = this.state.playlists.filter(playlist => {
  //       return (playlist.id === response.data.result.playlist.id ? true : false)
  //     })
  //     this.setState({ 
  //       nameSearch: '',
  //       playlists: filteredPlaylists
  //     })
  //     console.log(response.data.result.playlist)
  //   } catch (error) {
  //     console.log(`Ocorreu um erro: ${ error.message}`)
  //   }
  // }

  onChangeNameValue = e => {
    this.setState({ nameValue: e.target.value })
  }

  onChangeNameSearch = e => {
    this.setState({ nameSearch: e.target.value })
  }
  
  onChangeNewTrack = e => {
    this.setState({ newTrack: e.target.value })
  }

  onChangeNewTrackArtist = e => {
    this.setState({ newTrackArtist: e.target.value })
  }
  
  onChangeNewTrackUrl = e => {
    this.setState({ newTrackUrl: e.target.value })
  }

  toggleAddTrackSection = () => {
    this.setState({ addingTrack: !this.state.addingTrack })
  }

  render() {
    const currentSection = this.state.currentSection
    let goToSection = ''
    let selectedSection = ''
    switch(currentSection) {
      case 'createPlaylist':
        goToSection = 'Playlists'
        selectedSection = (
          <CreatePlaylist
            name={ this.state.nameValue }
            onChangeName={ this.onChangeNameValue }
            onCreatePlaylist={ this.createPlaylist }
          />
        )
        break
      case 'playlists':
        goToSection = 'criar Playlist'
        selectedSection = (
          <Playlists
            handleNameSearch={ this.state.nameSearch }
            onChangeSearch={ this.onChangeNameSearch }
            onSearchPlaylist={ this.searchPlaylist }
            onGetAllPlaylists={ this.getAllPlaylists }
            onDeletePlaylist={ this.deletePlaylist }
            onGetPlaylistTracks={ this.getPlaylistTracks }
            playlists={ this.state.playlists }
          />
        )
        break
      case 'playlistTracks':
        goToSection = 'Playlists'
        selectedSection = (
          <PlaylistTracks
            playlistData={ this.state.playlistData }
            playlistTracks={ this.state.playlistTracks }
            addingTrack={ this.state.addingTrack }
            handleAddTrackSectionToggle={ this.toggleAddTrackSection }
            newTrack={ this.state.newTrack }
            onChangeNewTrack={ this.onChangeNewTrack }
            newTrackArtist={ this.state.newTrackArtist }
            onChangeNewTrackArtist={ this.onChangeNewTrackArtist }
            newTrackUrl={ this.state.newTrackUrl }
            onChangeNewTrackUrl={ this.onChangeNewTrackUrl }
            onAddNewTrack={ this.addTrackToPlaylist }
            onDeletePlaylist={ this.deletePlaylist }
          />
        )
        break
      default:
        goToSection = 'Playlists'
        break
    }

    return (
      <AppContainer>
        <ToggleSection onClick={this.toggleSection}>
          Ir para { goToSection }
        </ToggleSection>
        { selectedSection }
      </AppContainer>
    )
  }
}