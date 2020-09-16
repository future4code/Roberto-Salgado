import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage, 
  goToLoginPage,
  goToTripDetailsPage, 
  goToCreateTripPage, 
  goBack 
} from '../../actions/goToPages'

const ListTripsPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    // token ? getTripsList() : history.push("/login")
    token || goToLoginPage(history)
  }, [history])

  return (
    <div>
      <p>Lista de Viagens</p>
      <button onClick={ () => goToHomePage(history) }>
        Ir para Home
      </button>
      <button onClick={ () => goToTripDetailsPage(history) }>
        Ir para Detalhes da Viagem
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

export default ListTripsPage