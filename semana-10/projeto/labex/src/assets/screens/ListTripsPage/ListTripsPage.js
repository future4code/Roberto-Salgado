import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage, 
  goToTripDetailsPage, 
  goToCreateTripPage, 
  goBack 
} from '../../actions/goToPages'

const ListTripsPage = () => {
  const history = useHistory()

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