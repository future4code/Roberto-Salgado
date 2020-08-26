import React from 'react'
import axios from 'axios'
import { Register } from './assets/components/Register'
import { Users } from './assets/components/Users'
import { UserDetails } from './assets/components/UserDetails'
import {
  AppContainer,
  ToggleSection
} from './assets/components/Styles'

export default class App extends React.Component {
  state = {
    users: [],
    nameValue: '',
    emailValue: '',
    currentSection: 'register',
    details: {}
  }

  toggleSection = () => {
    this.setState({
      currentSection: this.state.currentSection === 'userdetails' ? 'userslist' : (
        this.state.currentSection === 'register' ? 'userslist' : 'register')
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
        this.setState({ currentSection: 'userslist' })
      }).catch(error => {
        console.log(`Ocorreu um erro: ${ error.data }`)
      })
    }
  }

  detailUser = (user) => {
    const request = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
      {
        headers: {
          Authorization: 'roberto-salgado-jackson'
        }
      }  
    )

    request.then((response) => {
      this.setState({
        details: { ...response.data },
        currentSection: 'userdetails'
      })
    }).catch(error => {
      console.log(`Ocorreu um erro: ${ error.data}`)
    })
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
    let sectionName = 'lista'
    let selectedSection = ''
    switch(currentSection) {
      case 'register':
        sectionName = 'lista'
        selectedSection = (
          <Register
            name={ this.state.nameValue }
            onChangeName={ this.onChangeNameValue }
            email={ this.state.emailValue }
            onChangeEmail={ this.onChangeEmailValue }
            onCreateUser={ this.createUser }
          />
        )
        break
      case 'userslist':
        sectionName = 'cadastro'
        selectedSection = (
          <Users
            onGetUsers={ this.getUsers }
            onDeleteUser={ this.deleteUser }
            onDetailUser={ this.detailUser }
            users={ this.state.users }
          />
        )
        break
      case 'userdetails':
        sectionName = 'lista'
        selectedSection = (
          <UserDetails
            details={ this.state.details }
            onDeleteUser={ this.deleteUser }
          />
        )
        break
      default:
        sectionName = 'lista'
        selectedSection = (
          <Register
            name={ this.state.nameValue }
            onChangeName={ this.onChangeNameValue }
            email={ this.state.emailValue }
            onChangeEmail={ this.onChangeEmailValue }
            onCreateUser={ this.createUser }
          />
        )
        break
    }

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