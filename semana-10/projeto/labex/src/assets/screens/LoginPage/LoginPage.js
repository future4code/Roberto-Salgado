import React from 'react'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory()

  const goToHomePage = (history) => {
    history.push("/")
  }
  
  const goToListTripsPage = (history) => {
    history.push("/trips/list")
  }
  
  const goToCreateTripPage = (history) => {
    history.push("/trips/create")
  }

  const goBack = (history) => {
    history.goBack()
  }

  return (
    <div>
      <p>Login</p>
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