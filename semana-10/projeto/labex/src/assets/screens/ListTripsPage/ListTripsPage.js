import React from 'react'
import { useHistory } from 'react-router-dom'

const ListTripsPage = () => {
  const history = useHistory()

  const goToHomePage = (history) => {
    history.push("/")
  }
  
  const goToTripDetailsPage = (history) => {
    history.push("/trips/details")
  }
  
  const goToCreateTripPage = (history) => {
    history.push("/trips/Create")
  }

  const goBack = (history) => {
    history.goBack()
  }

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