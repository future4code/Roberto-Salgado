import React from 'react'
import axios from 'axios'
import './styles.css'

export default class App extends React.Component {
  state = {
    users: [],
    nameValue: '',
    emailValue: '',
  }

  getUsers = () => {
    const request = axios.get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers: {
          Authorization: 'roberto-salgado-jackson'
        }
      }
    )

    request.then((response) => {
      this.setState({ users: response.data })
      console.log(this.state.users)
    }).catch((error) => {
      console.log(`Ocorreu um erro: ${ error.data }`)
    })
  }

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

    const request = axios.post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body,
      {
        headers: {
          Authorization: 'roberto-salgado-jackson'
        }
      }
    )

    request.then(response => {
      window.alert(`Usuário(a) ${ this.state.nameValue } criado(a) com sucesso`)
      this.getUsers()
      this.setState({
        nameValue: '',
        emailValue: ''
      })
    }).catch(error => {
      console.log(`Ocorreu um erro: ${ error.data }`)
    })
  }

  deleteUser = (user) => {
    const request = axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
      {
        headers: {
          Authorization: 'roberto-salgado-jackson'
        }
      }
    )

    request.then((response) => {
      window.alert(`Usuário(a) ${ user.name } removido`)
      this.getUsers()
    }).catch(error => {
      console.log(`Ocorreu um erro: ${ error.data }`)
    })
  }

  componentDidMount() {
    this.getUsers()
  }

  onChangeNameValue = e => {
    this.setState({ nameValue: e.target.value })
  }

  onChangeEmailValue = e => {
    this.setState({ emailValue: e.target.value })
  }

  render() {
    return (
      <div className='App'>
        <h1>Criar Usuário</h1>
        <input 
          value={ this.state.nameValue }
          onChange={ this.onChangeNameValue }
          placeholder={ 'Nome do Usuário' }
        />
        <input 
          value={ this.state.emailValue }
          onChange={ this.onChangeEmailValue }
          placeholder={ 'E-mail do Usuário' }
        />
        <button onClick={this.createUser}>Criar Usuáiro</button>
        <h1>Usuários Cadastrados</h1>
        {this.state.users.map((user) => {
          return (
            <p key={user.id}>
              { user.name }
              <span onClick={() => this.deleteUser(user)}>
                X
              </span>
            </p>
          )
        })}
      </div>
    )
  }
}