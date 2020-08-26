import React from 'react'
import axios from 'axios'
import { Register } from './assets/components/Register'
import { Users } from './assets/components/Users'
import {
  AppContainer,
  ToggleSection
} from './assets/components/Styles'

export default class App extends React.Component {
  state = {
    users: [],
    nameValue: '',
    emailValue: '',
    currentSection: 'register'
  }

  toggleSection = () => {
    this.setState({
      currentSection: this.state.currentSection === 'register' ? 'userslist' : 'register'
    })
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
      // console.log(this.state.users)
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
      alert(`Usuário(a) ${ this.state.nameValue } criado(a) com sucesso`)
      this.toggleSection()
      this.setState({
        nameValue: '',
        emailValue: ''
      })
    }).catch(error => {
      console.log(`Ocorreu um erro: ${ error.data }`)
    })
  }

  deleteUser = (user) => {
    const result = window.confirm('Tem certeza de que deseja deletar?')
    if(result) {
      const request = axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
        {
          headers: {
            Authorization: 'roberto-salgado-jackson'
          }
        }
      )
      request.then((response) => {
        alert(`Usuário(a) ${ user.name } removido`)
        this.getUsers()
      }).catch(error => {
        console.log(`Ocorreu um erro: ${ error.data }`)
      })
    }
  }

  onChangeNameValue = e => {
    this.setState({ nameValue: e.target.value })
    // console.log(this.state.nameValue)
  }

  onChangeEmailValue = e => {
    this.setState({ emailValue: e.target.value })
    // console.log(this.state.emailValue)
  }

  render() {
    const currentSection = this.state.currentSection
    const sectionName = currentSection === 'register' ? 'lista' : 'cadastro'
    const selectedSection = 
      currentSection === 'register' ? (
        <Register
          name={ this.state.nameValue }
          onChangeName={ this.onChangeNameValue }
          email={ this.state.emailValue }
          onChangeEmail={ this.onChangeEmailValue }
          onCreateUser={ this.createUser }
        />
      ) : (
        <Users
        onGetUsers={ this.getUsers }
        onDeleteUser={ this.deleteUser }
        users={ this.state.users }
        />
      )

    return (
      <AppContainer>
        <ToggleSection onClick={this.toggleSection}>
          Ir para { sectionName }
        </ToggleSection>
        { selectedSection }
      </AppContainer>
    )
  }
}