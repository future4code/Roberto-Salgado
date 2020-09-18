import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { 
  goToHomePage, 
  goToLoginPage,
  goToTripDetailsPage, 
  goToCreateTripPage, 
  goBack 
} from '../../actions/goToPages'
import { baseUrl } from '../../constants/axiosConstants'

const ListTripsPage = () => {
  const [tripsList, setTripsList] = useState([])
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    token ? getTrips() : goToLoginPage(history)
    // token || goToLoginPage(history)
  }, [history])

  const getTrips = () => {
    axios
      .get(`${ baseUrl }/trips`)
      .then(response => {
        setTripsList(response.data.trips)
      })
      .catch(error => {})
  }

  const handleTripClick = (tripId) => {
    goToTripDetailsPage(history, tripId)
  }

  return (
    <div>
      <h2>Lista de Viagens</h2>
      {tripsList.map(item => {
        return (
          <div 
            key={ item.id }
            onClick={ () => handleTripClick(item.id) }
          >
            <h3>{ item.name }</h3>
            <p>{ item.date } - <strong>{ item.planet }</strong></p>
          </div>
        )
      })}
      
      <button onClick={ () => goToHomePage(history) }>
        Ir para Home
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