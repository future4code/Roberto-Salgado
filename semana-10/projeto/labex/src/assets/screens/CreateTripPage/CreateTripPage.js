import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  goToHomePage,
  goToTripDetailsPage,
  goToListTripsPage,
  goBack
} from '../../actions/goToPages'

const CreateTripPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    // token ? getTripsList() : history.push("/login")
    token || history.push("/login")
  }, [history])

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