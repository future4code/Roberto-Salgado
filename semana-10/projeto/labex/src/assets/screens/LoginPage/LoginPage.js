import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { 
  goToHomePage, 
  goToListTripsPage, 
  goToCreateTripPage, 
  goBack 
} from '../../actions/goToPages'
import { useForm } from '../../hooks/useForm'
import { baseUrl } from '../../constants/axiosConstants'

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

    axios
      .post(`${ baseUrl }/login`, body)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        resetState()
        goToListTripsPage(history)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <p>Login</p>
      <form onSubmit={ handleSubmittion } >
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
      </form>
      <div>
        <button onClick={ () => goToHomePage(history) }>
          Ir para Home
        </button>
        <button onClick={ () => goToListTripsPage(history) }>
          Ir para Lista de Viagens
        </button>
        <button onClick={ () => goToCreateTripPage(history) }>
          Criar Viagem
        </button>
        <button onClick={ () => goBack(history) }>
          Voltar
        </button>
      </div>
    </div>
  )
}

export default LoginPage