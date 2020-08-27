import React from 'react'
import {
  UserDetailsContainer,
  UserDetailsCard,
  ChangesFieldsContainer,
  EditButton,
  SaveChangesButton
} from './Styles'

export class UserDetails extends React.Component {
  render() {
    const saveEditChanges = (
      <ChangesFieldsContainer>
        <label htmlFor='name'>Novo Nome: </label>
        <input
          required
          name='name'
          type='text'
          value={ this.props.userName }
          onChange={ this.props.onChangeUserName }
        />
        <label htmlFor='email'>Novo E-mail: </label>
        <input
          required
          name='email'
          type='email'
          value={ this.props.userEmail }
          onChange={ this.props.onChangeUserEmail }
        />
        <SaveChangesButton onClick={ () => this.props.onEditUser(this.props.details) }>
          Salvar
        </SaveChangesButton>
      </ChangesFieldsContainer>
    )
    const openEditSection = (
      <EditButton onClick={ this.props.handleEditSectionToggle }>Editar</EditButton>
    )

    const editSection = 
      this.props.editing ? saveEditChanges : openEditSection

    return (
      <UserDetailsContainer>
        <h3>Detalhes do Usuário:</h3>
        <UserDetailsCard>
          <p><b>Nome: </b><span>{ this.props.details.name }</span></p>
          <p><b>E-mail: </b><span>{ this.props.details.email }</span></p>
        </UserDetailsCard>
        { editSection }
        <button onClick={ () => this.props.onDeleteUser(this.props.details) }>
          Deletar Usuário
        </button>
      </UserDetailsContainer>
    )
  }
}