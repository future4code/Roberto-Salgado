import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage, 
  goToListTripsPage,
} from '../../actions/goToPages'
import { useForm } from '../../hooks/useForm'
import { login } from '../../actions/requests'
import { baseUrl } from '../../constants/axiosConstants'
import {
  LoginScreenWrapper,
  FormWrapper,
  NavButtonsWrapper,
} from './styled'

const LoginPage = () => {
  const { form, onChange, resetState } = useForm({
    email: "",
    password: ""
  })

  const history = useHistory()
  
  useEffect(() => {
    const token = window.localStorage.getItem("token")

    token && goToListTripsPage(history)
  }, [history])

  const handleInputChange = event => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleSubmittion = event => {
    event.preventDefault()

    const body = {
      email: form.email,
      password: form.password
    }

    login(`${ baseUrl }/login`, body, history, resetState)
  }

  return (
    <LoginScreenWrapper>
      <h2>Login</h2>
      <FormWrapper onSubmit={ handleSubmittion } >
        <label>
          E-Mail:
          <input 
            value={ form.email }
            name="email"
            onChange={ handleInputChange }
            type="email"
            required
          />
        </label>
        <label>
          Senha:
          <input 
            value={ form.password }
            name="password"
            onChange={ handleInputChange }
            type="password"
            required
          />
        </label>
        <button>Enviar</button>
      </FormWrapper>
      <NavButtonsWrapper>
        <button onClick={ () => goToHomePage(history) }>
          Voltar para Home
        </button>
      </NavButtonsWrapper>
    </LoginScreenWrapper>
  )
}

export default LoginPage