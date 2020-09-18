import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  goToHomePage,
  goToListTripsPage,
  goBack
} from '../../actions/goToPages'
import { baseUrl } from '../../constants/axiosConstants'

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({})
  const pathParams = useParams()
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const tripId = pathParams.tripId

    token ? getTripDetails(tripId, token) : history.push("/login")
    // token || history.push("/login")
  }, [history, pathParams.tripId])

  const getTripDetails = (tripId, token) => {
    axios
      .get(`${ baseUrl }/trip/${ tripId }`, {
        headers: {
          auth: token
        }
      })
      .then(response => {
        setTrip(response.data.trip)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Detalhes da Viagem</h2>
      <div>
        <h3>{ trip.name }</h3>
        <h4>Destino: <span>{ trip.planet }</span></h4>
        <h4>Data: <span>{ trip.date }</span></h4>
        <h4>Duração: <span>{ trip.durationInDays } dias</span></h4>
        <h4>Descrição:</h4>
        <p>{ trip.description }</p>
        <div>
          <h4>Candidatos:</h4>
          { trip.candidates && (
            trip.candidates.map(item => {
              return (
                <div key={ item.id }>
                  <h5>Nome: <span>{ item.name }</span></h5>
                  <h5>Idade: <span>{ item.age }</span></h5>
                  <h5>País: <span>{ item.country }</span></h5>
                  <h5>Texto de inscrição:</h5>
                  <p>{ item.applicationText }</p>
                </div>
              )
            })
          ) }
        </div>
      </div>

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