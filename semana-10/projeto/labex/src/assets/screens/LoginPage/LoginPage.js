import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { 
  goToHomePage, 
  goToListTripsPage, 
  goToCreateTripPage, 
  goBack 
} from '../../actions/goToPages'
import { useInput } from '../../hooks/useInput'
import { baseUrl } from '../../constants/axiosConstants'

const LoginPage = () => {
  const history = useHistory()

  const [email, handleEmail] = useInput()
  const [password, handlePassword] = useInput()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    token && goToListTripsPage(history)
  }, [history])

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    }

    axios
      .post(`${ baseUrl }/login`, body)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        goToListTripsPage(history)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <p>Login</p>
      <label>
        E-Mail:
        <input 
          type="email"
          value={ email }
          onChange={ handleEmail }
        />
      </label>
      <label>
        Senha:
        <input 
          type="password"
          value={ password }
          onChange={ handlePassword }
        />
      </label>
      <button onClick={ handleLogin } >Fazer Login</button>
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