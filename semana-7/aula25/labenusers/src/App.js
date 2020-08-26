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
    nameSearch: '',
    currentSection: 'register',
    details: {},
    editing: false,
    nameEdit: '',
    emailEdit: ''
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

  editUser = (user) => {
    const body = {
      name: this.state.nameEdit,
      email: this.state.emailEdit
    }

    const request = axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
      body,
      {
        headers: {
          Authorization: 'roberto-salgado-jackson'
        }
      }
    )

    request.then((response) => {
      alert(`Nome alterado para ${ this.state.nameEdit }\nE-mail alterado para ${ this.state.emailEdit }`)
      this.detailUser(user)
      this.setState({ 
        editing: false,
        nameEdit: '',
        emailEdit: ''
      })
    }).catch(error => {
      console.log(`Ocorreu um erro: ${ error.data}`)
    })
  }

  searchUser = (name) => {
    this.getUsers()
    const request = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}`,
      {
        headers: {
          Authorization: 'roberto-salgado-jackson'
        }
      }
    )

    request.then((response) => {
      const listaFiltrada = this.state.users.filter(user => {
        return (user.name === response.data[0].name ? true : false)
      })
      this.setState({ 
        nameSearch: '',
        users: listaFiltrada
      })
      console.log(response.data[0].name)
      
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

  onChangeNameSearch = e => {
    this.setState({ nameSearch: e.target.value })
  }
  
  onChangeNameEdit = e => {
    this.setState({ nameEdit: e.target.value })
  }

  onChangeEmailEdit = e => {
    this.setState({ emailEdit: e.target.value })
  }

  toggleEditSection = () => {
    this.setState({ editing: true })
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
            handleNameSearch={ this.state.nameSearch }
            onChangeSearch={ this.onChangeNameSearch }
            onSearchUser={ this.searchUser }
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
            editing={ this.state.editing }
            handleEditSectionToggle={ this.toggleEditSection }
            userName={ this.state.nameEdit }
            onChangeUserName={ this.onChangeNameEdit }
            userEmail={ this.state.emailEdit }
            onChangeUserEmail={ this.onChangeEmailEdit }
            onEditUser={ this.editUser }
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