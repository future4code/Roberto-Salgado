import React, { useState } from 'react'
import { Button, CircularProgress, TextField } from '@material-ui/core'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'

const SignUpForm = props => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({username: '', email: '', password: ''})
  const [isLoading, setIsLoading] = useState(false)

  const onClickSignUp = event => {
    event.preventDefault()
    const element = document.getElementById('signup-form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      signUp(form, history, props.setButtonName, setIsLoading)
    }
  }

  return (
    <form id={'signup-form'}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.username}
            name={'username'}
            onChange={handleInputChange}
            label={'Nome de Usuário'}
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
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          size={'large'}
          fullWidth
          onClick={onClickSignUp}
        >
          {isLoading ? <CircularProgress color={"primary"} size={26}/> : "Fazer Cadastro"}          
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm