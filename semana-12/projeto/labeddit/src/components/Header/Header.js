import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  return (
    <AppBar>
      <Toolbar>
        <Button onClick={() => goToFeed(history)}>Labeddit</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header