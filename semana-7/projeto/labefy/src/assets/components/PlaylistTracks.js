import React from 'react'
import {
  TracksContainer,
  TracksList,
  NewTrackForm,
  ToggleAddTrackSection,
  AddTrackButton
} from '../styles/Styles'

export class PlaylistTracks extends React.Component {
  render() {
    const addTrack = (
      <NewTrackForm>
        <label htmlFor='track'>Faixa: </label>
        <input
          required
          name='track'
          type='text'
          value={ this.props.newTrack }
          onChange={ this.props.onChangeNewTrack }
        />
        <label htmlFor='artist'>Artista: </label>
        <input
          required
          name='artist'
          type='text'
          value={ this.props.newTrackArtist }
          onChange={ this.props.onChangeNewTrackArtist }
        />
        <label htmlFor='url'>URL: </label>     
        <input
          required
          name='url'
          type='text'
          value={ this.props.newTrackUrl }
          onChange={ this.props.onChangeNewTrackUrl }
        />
        <AddTrackButton 
          onClick={ () => this.props.onAddNewTrack(this.props.playlistData) }
        >
          Adicionar
        </AddTrackButton>
        <button onClick={ this.props.handleAddTrackSectionToggle }>Fechar</button>
      </NewTrackForm>
    )
    const openAddTrackSection = (
      <ToggleAddTrackSection 
        onClick={ this.props.handleAddTrackSectionToggle }
      >
        Adicionar Faixa
      </ToggleAddTrackSection>
    )

    const addTrackSection = 
      this.props.addingTrack ? addTrack : openAddTrackSection

    return (
      <TracksContainer>
        <h3>{ this.props.playlistData.name }</h3>
        { addTrackSection }
        <TracksList>
          { this.props.playlistTracks.map(track => {
            return (
              <div key={track.id}>
                <p>
                  <b>Faixa: </b>
                  <span>{ track.name }</span>
                </p>
                <p>
                  <b>Artista: </b>
                  <span>{ track.artist }</span>
                </p>
                <audio controls>
                  <source src={ track.url } type='audio/mpeg' />
                </audio>
              </div>
            )
          }) }          
        </TracksList>
        <button onClick={ () => this.props.onDeletePlaylist(this.props.playlistData) }>
          Deletar Playlist
        </button>
      </TracksContainer>
    )
  }
}