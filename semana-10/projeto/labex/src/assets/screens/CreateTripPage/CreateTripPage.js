import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  goToHomePage,
  goToTripDetailsPage,
  goToListTripsPage,
  goBack
} from '../../actions/goToPages'

const CreateTripPage = () => {
  const history = useHistory()

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