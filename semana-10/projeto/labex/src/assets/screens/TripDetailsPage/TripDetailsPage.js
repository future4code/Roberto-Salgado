import React from 'react'
import { useHistory } from 'react-router-dom'

const TripDetailsPage = () => {
  const history = useHistory()

  const goToHomePage = (history) => {
    history.push("/")
  }
  
  const goToListTripsPage = (history) => {
    history.push("/trips/list")
  }

  const goBack = (history) => {
    history.goBack()
  }

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