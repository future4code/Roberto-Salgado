import React from 'react'
import {
  RegisterContainer,
  RegisterTitle,
  RegisterData,
  RegisterButton
} from './Styles'

export class Register extends React.Component {
render() {
    return (
      <RegisterContainer>
        <RegisterTitle>Criar Usuário:</RegisterTitle>
        <RegisterData>
          <label htmlFor='name'>Nome:</label>
          <input
            required
            name='name'
            type='text'
            value={ this.props.name }
            onChange={ this.props.onChangeName }
          />
        </RegisterData>
        <RegisterData>
          <label htmlFor='email'>E-mail:</label>
          <input
            required
            name='email'
            type='email' 
            value={ this.props.email }
            onChange={ this.props.onChangeEmail }
          />
        </RegisterData>
        <RegisterButton onClick={this.props.onCreateUser}>Criar</RegisterButton>
      </RegisterContainer>
    )
  }
}