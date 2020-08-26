import React from 'react'

export class UserDetails extends React.Component {
  render() {
    return (
      <div>
        <h3>Detalhes do Usuário</h3>
        <p>Nome: <span>{ this.props.details.name }</span></p>
        <p>E-mail: <span>{ this.props.details.email }</span></p>
        <button onClick={ () => this.props.onDeleteUser(this.props.details) }>
          Deletar Usuário
        </button>
      </div>
    )
  }
}