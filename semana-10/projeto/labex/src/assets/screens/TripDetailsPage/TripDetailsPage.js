import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  goToHomePage,
  goToListTripsPage,
} from '../../actions/goToPages'
import { baseUrl } from '../../constants/axiosConstants'
import {
  TripDetailsScreenWrapper,
  TripDetailsWrapper,
  TripDescriptionLabel,
  TripDescription,
  DetailsSpan,
  CandidatesTitle,
  CandidateListWrapper,
  CandidateCard,
  CandidateApplicationTextLabel,
  CandidateApplicationText,
  NavButtonsWrapper,
} from './styled'

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
    <TripDetailsScreenWrapper>
      <h2>Detalhes da Viagem</h2>
      <div>
        <TripDetailsWrapper>
          <h3>{ trip.name }</h3>
          <h4>Destino: <DetailsSpan>{ trip.planet }</DetailsSpan></h4>
          <h4>Data: <DetailsSpan>{ trip.date }</DetailsSpan></h4>
          <h4>Duração: <DetailsSpan>{ trip.durationInDays } dias</DetailsSpan></h4>
          <TripDescriptionLabel>Descrição:</TripDescriptionLabel>
          <TripDescription>{ trip.description }</TripDescription>
        </TripDetailsWrapper>
        <CandidatesTitle>Candidatos:</CandidatesTitle>
        <CandidateListWrapper>
          { trip.candidates && (
            trip.candidates.map(item => {
              return (
                <CandidateCard key={ item.id }>
                  <h5>Nome: <DetailsSpan>{ item.name }</DetailsSpan></h5>
                  <h5>Idade: <DetailsSpan>{ item.age }</DetailsSpan></h5>
                  <h5>País: <DetailsSpan>{ item.country }</DetailsSpan></h5>
                  <CandidateApplicationTextLabel>Texto de inscrição:</CandidateApplicationTextLabel>
                  <CandidateApplicationText>{ item.applicationText }</CandidateApplicationText>
                </CandidateCard>
              )
            })
          ) }
        </CandidateListWrapper>
      </div>
      <NavButtonsWrapper>
        <button onClick={ () => goToListTripsPage(history) }>
          Voltar para Lista de Viagens
        </button>
        <button onClick={ () => goToHomePage(history) }>
          Ir para Home
        </button>
      </NavButtonsWrapper>
    </TripDetailsScreenWrapper>
  )
}

export default TripDetailsPage