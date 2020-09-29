import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { goToFeed } from '../../routes/Coordinator'
import { ButtonContainer, HeaderTitle, LogoIcon } from './styled'
import { mdiRacingHelmet } from '@mdi/js'

const Header = () => {
  const history = useHistory()
  return (
    <AppBar>
      <Toolbar>
        <ButtonContainer>
          <Button color={'inherit'} onClick={() => goToFeed(history)}>
            <LogoIcon
              size={1}
              path={mdiRacingHelmet}
            />
            <HeaderTitle variant={'h6'}>Labeddit</HeaderTitle>
          </Button>
          <Button color={'inherit'} onClick={() => null}>
            <HeaderTitle variant={'h6'}>Logout</HeaderTitle>
          </Button>
        </ButtonContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header