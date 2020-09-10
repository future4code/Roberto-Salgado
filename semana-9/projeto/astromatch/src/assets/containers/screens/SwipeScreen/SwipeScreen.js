import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../../../constants/axiosConstants'
import {
  SwipeScreenWrapper,
  MatchIcon,
  ContentWrapper,
  ButtonsWrapper,
  OptionButton
} from './styled'
import { mdiAccountMultipleCheck } from '@mdi/js'
import AppBar from '../../../components/AppBar/AppBar'
import UserCard from '../../../components/UserCard/UserCard'
import ClearIcon from '@material-ui/icons/Clear'
import FavoriteIcon from '@material-ui/icons/Favorite'

const SwipeScreen = props => {
  const [profile, setProfile] = useState({})
  // const [swipe, setSwipe] = useState('')

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios
      .get(`${ baseUrl }/person`)
      .then(response => {
        setProfile(response.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const choosePerson = (option) => {
    const body = {
      id: profile.id,
      choice: option
    }
    axios
      .post(`${ baseUrl }/choose-person`, body)
      .then(response => {
        getProfile()
      })
      .catch(err => {
        console.log(err)
      })
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
        <UserCard user={ profile }/>
        <ButtonsWrapper>
          <OptionButton
            onClick={ () => choosePerson(false) }
            swipe="left"
          >
            <ClearIcon fontSize='inherit'/>
          </OptionButton>
          <OptionButton
            onClick={ () => choosePerson(true) }
            swipe="right"
          
          >
            <FavoriteIcon fontSize='inherit'/>
          </OptionButton>
        </ButtonsWrapper>
      </ContentWrapper>
    </SwipeScreenWrapper>
  )
}

export default SwipeScreen