import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { InputsContainer, LoginFormContainer } from './styled'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const LoginForm = props => {
  const [form, handleInputChange] = useForm({email: '', password: ''})
  const history = useHistory()

  const onClickLogin = event => {
    event.preventDefault()
    const element = document.getElementById('login-form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      login(form, history, props.setButtonName)
    }
  }

  return (
    <form id={'login-form'}>
      <LoginFormContainer>
        <InputsContainer>
          <TextField
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            label={'E-mail'}
            variant={'outlined'}
            margin={'normal'}
            type={'email'}
            fullWidth
            autoFocus
            required
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            label={'Senha'}
            variant={'outlined'}
            margin={'normal'}
            type={'password'}
            fullWidth
            required
          />
        </InputsContainer>
        <Button
          onClick={onClickLogin}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          size={'large'}
          fullWidth
        >
          Fazer Login
        </Button>
      </LoginFormContainer>
    </form>
  )
}

export default LoginForm