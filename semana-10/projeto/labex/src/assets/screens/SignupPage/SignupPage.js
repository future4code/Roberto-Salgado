import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage, 
  goToListTripsPage,
} from '../../actions/goToPages'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../actions/requests'
import { baseUrl } from '../../constants/axiosConstants'
import {
  SignupScreenWrapper,
  FormWrapper,
  NavButtonsWrapper,
} from './styled'

const LoginPage = () => {
  const { form, onChange } = useForm({
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

    signUp(`${ baseUrl }/signup`, body, history)
  }

  return (
    <SignupScreenWrapper>
      <h2>Criar usuário</h2>
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
        <button>Criar novo usuário</button>
      </FormWrapper>
      <NavButtonsWrapper>
        <button onClick={ () => goToHomePage(history) }>
          Voltar para Home
        </button>
      </NavButtonsWrapper>
    </SignupScreenWrapper>
  )
}

export default LoginPage