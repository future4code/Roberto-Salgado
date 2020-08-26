import React from 'react'
import {
  UserDetailsContainer,
  UserDetailsCard
} from './Styles'

export class UserDetails extends React.Component {
  render() {
    const saveEditChanges = (
      <div>
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
        <button onClick={ () => this.props.onEditUser(this.props.details) }>
          Salvar
        </button>
      </div>
    )
    const openEditSection = (
      <button onClick={ this.props.handleEditSectionToggle }>Editar</button>
    )

    const editSection = 
      this.props.editing ? saveEditChanges : openEditSection

    return (
      <UserDetailsContainer>
        <UserDetailsCard>
          <h3>Detalhes do Usuário:</h3>
          <p><b>Nome: </b><span>{ this.props.details.name }</span></p>
          <p><b>E-mail: </b><span>{ this.props.details.email }</span></p>
          { editSection }
        </UserDetailsCard>
        <button onClick={ () => this.props.onDeleteUser(this.props.details) }>
          Deletar Usuário
        </button>
      </UserDetailsContainer>
    )
  }
}