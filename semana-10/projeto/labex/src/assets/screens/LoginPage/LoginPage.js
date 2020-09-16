import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage, 
  goToListTripsPage, 
  goToCreateTripPage, 
  goBack 
} from '../../actions/goToPages'

const useInput = () => {
  const [value, updateValue] = useState ("")

  const handleValue = event => {
    updateValue(event.target.value)
  }

  return [value, handleValue]
}

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberto-salgado-jackson"

const LoginPage = () => {
  const history = useHistory()

  const [email, handleEmail] = useInput()
  const [password, handlePassword] = useInput()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    token && history.push("/trip/list")
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
        history.push("/trip/list")
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
  )
}

export default LoginPage