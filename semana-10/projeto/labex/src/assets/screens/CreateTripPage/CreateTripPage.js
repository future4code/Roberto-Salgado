import React from 'react'
import { useHistory } from 'react-router-dom'

const CreateTripPage = () => {
  const history = useHistory()

  const goToHomePage = (history) => {
    history.push("/")
  }
  
  const goToTripDetailsPage = (history) => {
    history.push("/trips/details")
  }
  
  const goToListTripsPage = (history) => {
    history.push("/trips/list")
  }

  const goBack = (history) => {
    history.goBack()
  }

  return (
    <div>
      <p>Criar Viagem</p>
      <button onClick={ () => goToHomePage(history) }>
        Ir para Home
      </button>
      <button onClick={ () => goToTripDetailsPage(history) }>
        Ir para Detalhes da Viagem
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

export default CreateTripPage