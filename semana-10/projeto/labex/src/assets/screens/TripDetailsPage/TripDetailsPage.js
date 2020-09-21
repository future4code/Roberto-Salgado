import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
  goToHomePage,
  goToListTripsPage,
} from '../../actions/goToPages'
import { baseUrl } from '../../constants/axiosConstants'
import { useProtectPage } from '../../hooks/useProtectedPage'
import { useGetTripDetails } from '../../hooks/useRequestData'
import CandidateCard from '../../components/CandidateCard/CandidateCard'
import ApprovedCard from '../../components/ApprovedCard/ApprovedCard'
import {
  TripDetailsScreenWrapper,
  TripDetailsWrapper,
  TripDescriptionLabel,
  TripDescription,
  DetailsSpan,
  CandidatesTitle,
  CandidateListWrapper,
  NavButtonsWrapper,
} from './styled'

const TripDetailsPage = () => {
  const pathParams = useParams()
  const [trip, updateTrip] = useGetTripDetails(
    `${ baseUrl }/trip/${ pathParams.tripId }`, 
    []
  )
  const history = useHistory()

  useProtectPage()



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
        { trip.candidates && trip.candidates.length ? (
          <div>
            <CandidatesTitle>Candidatos:</CandidatesTitle>
            <CandidateListWrapper>
            { trip.candidates.map(item => {
                return (
                  <CandidateCard 
                    key={ item.id }
                    candidateId={ item.id }
                    candidateName={ item.name }
                    candidateIdade={ item.idade }
                    candidateCountry={ item.country }
                    candidateApplicationText={ item.applicationText }
                    url={ `${ baseUrl }/trips/${ trip.id }/candidates/${ item.id }/decide` }
                    updateTrip={ updateTrip }
                  />
                )
              }) }
            </CandidateListWrapper>
          </div>
        ) : (
          <div></div>
        ) }
        { trip.approved && trip.approved.length ? (
          <div>
            <CandidatesTitle>Aprovados:</CandidatesTitle>
            <CandidateListWrapper>
            { trip.approved.map(item => {
                return (
                  <ApprovedCard 
                    key={ item.id }
                    candidateName={ item.name }
                    candidateIdade={ item.idade }
                    candidateCountry={ item.country }
                    candidateApplicationText={ item.applicationText }
                  />
                )
              }) }
            </CandidateListWrapper>
          </div>
        ) : (
          <div></div>
        ) }

        
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