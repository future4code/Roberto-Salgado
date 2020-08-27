import React from 'react'
import {
  UsersList,
  SearchContainer,
  UsersListItem,
  DeleteButton
} from './Styles'

export class Users extends React.Component {
  
  componentDidMount() {
    this.props.onGetUsers()
  }

  render () {
    return (
      <UsersList>
        <h2>Usuários Cadastrados:</h2>
        <SearchContainer>
          <input 
            name='search'
            type='text'
            value={ this.props.handleNameSearch }
            onChange={ this.props.onChangeSearch }
          />
          <button 
            onClick={ () => this.props.onSearchUser(this.props.handleNameSearch) }
          >
            Buscar
          </button>
        </SearchContainer>
        { this.props.users.map((user) => {
            return (
              <UsersListItem 
                key={user.id} 
                onClick={ () => this.props.onDetailUser(user) }
              >
                { user.name }
                <DeleteButton onClick={ () => this.props.onDeleteUser(user) }>
                  X
                </DeleteButton>
              </UsersListItem>
            )
          })}
        </UsersList>
    )
  }
}