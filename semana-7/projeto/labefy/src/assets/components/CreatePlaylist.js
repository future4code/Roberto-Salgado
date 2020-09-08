import React from 'react'
import {
  FormContainer,
  FormTitle,
  FormData,
  CreatePlaylistButton
} from '../styles/Styles'

export class CreatePlaylist extends React.Component {
render() {
    return (
      <FormContainer>
        <FormTitle>Criar Playlist:</FormTitle>
        <FormData>
          <label htmlFor='name'>Nome:</label>
          <input
            required
            name='name'
            type='text'
            value={ this.props.name }
            onChange={ this.props.onChangeName }
          />
        </FormData>
        <CreatePlaylistButton 
          onClick={this.props.onCreatePlaylist}
        >
          Criar
        </CreatePlaylistButton>
      </FormContainer>
    )
  }
}