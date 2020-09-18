import React from 'react'
import axios from 'axios'
import { baseUrl } from '../../../constants/axiosConstants'
import {
  SwipeScreenWrapper,
  MatchIcon,
  ContentWrapper,
  ButtonsWrapper,
  SwipeButton
} from './styled'
import { mdiAccountMultipleCheck } from '@mdi/js'
import AppBar from '../../../components/AppBar/AppBar'
import UserCard from '../../../components/UserCard/UserCard'
import { NoMoreUsers } from '../../../components/NoMoreUsers/NoMoreUsers'
import ClearIcon from '@material-ui/icons/Clear'
import FavoriteIcon from '@material-ui/icons/Favorite'

const SwipeScreen = props => {

  const choosePerson = (like) => {
    if (props.profile) {
      const body = {
        id: props.profile.id,
        choice: like
      }
      axios
        .post(`${ baseUrl }/choose-person`, body)
        .then(response => {
          props.getProfile()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <SwipeScreenWrapper>
      <AppBar 
        rightAction={
          <MatchIcon
            size={ 1.5 }
            path={ mdiAccountMultipleCheck }
            onClick={ props.goToMatchesScreen  }
          />
        }
      />
      <ContentWrapper>
        { props.profile ? 
          <UserCard user={ props.profile }/> : 
          <NoMoreUsers /> }
        <ButtonsWrapper>
          <SwipeButton
            onClick={ () => choosePerson(false) }
            swipe="left"
          >
            <ClearIcon fontSize='inherit'/>
          </SwipeButton>
          <SwipeButton
            onClick={ () => choosePerson(true) }
            swipe="right"
          
          >
            <FavoriteIcon fontSize='inherit'/>
          </SwipeButton>
        </ButtonsWrapper>
      </ContentWrapper>
    </SwipeScreenWrapper>
  )
}

export default SwipeScreen