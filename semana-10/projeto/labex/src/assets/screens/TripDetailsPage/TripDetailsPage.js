import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  goToHomePage,
  goToListTripsPage,
  goBack
} from '../../actions/goToPages'

const TripDetailsPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    // token ? getTripsList() : history.push("/login")
    token || history.push("/login")
  }, [history])

  return (
    <div>
      <p>Detalhes da Viagem</p>
      <button onClick={ () => goToHomePage(history) }>
        Ir para Home
      </button>
      <button onClick={ () => goToListTripsPage(history) }>
        Ir para Lista de Viagens
      </button>
      <button onClick={ () => goBack(history) }>
        Voltar
      </button>
    </div>
  )
}

export default TripDetailsPage