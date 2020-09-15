import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage, 
  goToListTripsPage, 
  goToCreateTripPage, 
  goBack 
} from '../../actions/goToPages'

const LoginPage = () => {
  const history = useHistory()

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