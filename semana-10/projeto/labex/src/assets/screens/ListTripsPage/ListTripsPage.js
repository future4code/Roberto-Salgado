import React from 'react'
import { useHistory } from 'react-router-dom'
import { 
  goToHomePage,
  goToTripDetailsPage, 
  goToCreateTripPage,
} from '../../actions/goToPages'
import { baseUrl } from '../../constants/axiosConstants'
import { useProtectPage } from '../../hooks/useProtectedPage'
import { useGetTrips } from '../../hooks/useRequestData'
import {
  ListTripsScreenWrapper,
  TripsListWrapper,
  TripsListItem,
  NavButtonsWrapper,
} from './styled'

const ListTripsPage = () => {
  const tripsList = useGetTrips(`${ baseUrl }/trips`, [])
  const history = useHistory()

  useProtectPage()

  const handleTripClick = (tripId) => {
    goToTripDetailsPage(history, tripId)
  }

  return (
    <ListTripsScreenWrapper>
      <h2>Lista de Viagens</h2>
      <TripsListWrapper>
        {tripsList.map(item => {
          return (
            <TripsListItem 
              key={ item.id }
              onClick={ () => handleTripClick(item.id) }
            >
              <h3>{ item.name }</h3>
              <p>{ item.date } { "->" } <strong>{ item.planet }</strong></p>
            </TripsListItem>
          )
        })}
        <button onClick={ () => goToCreateTripPage(history) }>
          Criar Viagem
        </button>
      </TripsListWrapper>
      <NavButtonsWrapper>
        <button onClick={ () => goToHomePage(history) }>
          Ir para Home
        </button>
      </NavButtonsWrapper>
    </ListTripsScreenWrapper>
  )
}

export default ListTripsPage