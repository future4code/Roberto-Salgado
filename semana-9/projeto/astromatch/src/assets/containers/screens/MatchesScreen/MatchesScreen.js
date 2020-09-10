import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../../../constants/axiosConstants'
import {
  MatchIcon, List, ListItem, Avatar, ListText
} from './styled'
import { mdiAccountSwitch } from '@mdi/js'
import AppBar from '../../../components/AppBar/AppBar'

const MatchesScreen = props => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios
      .get(`${ baseUrl }/matches`)
      .then(response => {
        setMatches(response.data.matches)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  return (
    <div>
      <AppBar 
        leftAction={ <MatchIcon
          path={ mdiAccountSwitch }
          size={ 1 }
          onClick={ props.goToSwipeScreen }
        /> }
      />
      <List>
        { matches && matches.map(user => (
          <ListItem key={ user.id }>
            <Avatar src={ user.photo }/>
            <ListText>{ user.name }</ListText>
          </ListItem>
        )) }
      </List>
    </div>
  )
}

export default MatchesScreen