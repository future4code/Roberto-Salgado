import React from 'react'
import {
  PlaylistsList,
  SearchContainer,
  PlaylistsItem,
  DeleteButton
} from '../styles/Styles'

export class Playlists extends React.Component {
  
  componentDidMount() {
    this.props.onGetAllPlaylists()
  }

  render () {
    return (
      <PlaylistsList>
        <h2>Playlists:</h2>
        <SearchContainer>
          <input 
            name='search'
            type='text'
            value={ this.props.handleNameSearch }
            onChange={ this.props.onChangeSearch }
          />
          <button 
            onClick={ () => this.props.onSearchPlaylist(this.props.handleNameSearch) }
          >
            Buscar
          </button>
          <button
            onClick={ this.props.onClearSearch }
          >
            Limpar
          </button>
        </SearchContainer>
        { this.props.playlists.map(playlist => {
            return (
              <PlaylistsItem 
                key={playlist.id} 
                onClick={ () => this.props.onGetPlaylistTracks(playlist) }
              >
                { playlist.name }
                <DeleteButton onClick={ () => this.props.onDeletePlaylist(playlist) }>
                  X
                </DeleteButton>
              </PlaylistsItem>
            )
          })}
        </PlaylistsList>
    )
  }
}