import React, { useEffect } from 'react'
import {
  MatchIcon, List, ListItem, Avatar, ListText
} from './styled'
import { mdiAccountSwitch } from '@mdi/js'
import AppBar from '../../../components/AppBar/AppBar'

const MatchesScreen = props => {

  useEffect(() => {
    props.getMatches() // eslint-disable-next-line
  }, [props.matches])
  
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
        { props.matches && props.matches.map(user => (
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