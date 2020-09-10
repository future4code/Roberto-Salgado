import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  SwipeScreenWrapper,
  ContentWrapper
} from './styled'
import UserCard from '../../../components/UserCard/UserCard'

const SwipeScreen = props => {
  const [profile, setProfile] = useState({})
  const [swipe, setSwipe] = useState('')

  useEffect(() => {
    getProfile()
  }, [swipe])

  const getProfile = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberto-salgado-jackson/person`)
      .then(response => {
        setProfile(response.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <SwipeScreenWrapper>
      <div>AppBar</div>
      <ContentWrapper>
        <UserCard user={profile}/>
      </ContentWrapper>
    </SwipeScreenWrapper>
  )
}

export default SwipeScreen