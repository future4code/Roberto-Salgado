import React from 'react'
import {

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
        <br />
        <label htmlFor='email'>Novo E-mail: </label>
        <input
          required
          name='email'
          type='email'
          value={ this.props.userEmail }
          onChange={ this.props.onChangeUserEmail }
        />
        <br />
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
      <div>
        <h3>Detalhes do Usuário</h3>
        <p><b>Nome: </b><span>{ this.props.details.name }</span></p>
        <p><b>E-mail: </b><span>{ this.props.details.email }</span></p>
        { editSection }
        <br /><br />
        <button onClick={ () => this.props.onDeleteUser(this.props.details) }>
          Deletar Usuário
        </button>
      </div>
    )
  }
}