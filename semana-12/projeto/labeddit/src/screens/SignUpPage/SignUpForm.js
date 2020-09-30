import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'

const SignUpForm = props => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({name: '', email: '', password: ''})

  const onClickSignUp = event => {
    event.preventDefault()
    const element = document.getElementById('signup-form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      signUp(form, history, props.setButtonName)
    }
  }

  return (
    <form id={'signup-form'}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={'name'}
            onChange={handleInputChange}
            label={'Nome'}
            variant={'outlined'}
            margin={'normal'}
            fullWidth
            autoFocus
            required
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            label={'E-mail'}
            variant={'outlined'}
            margin={'normal'}
            type={'email'}
            fullWidth
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
          onClick={onClickSignUp}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          size={'large'}
          fullWidth
        >
          Fazer Cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm