import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { goToFeed } from '../../routes/Coordinator'
import { ButtonContainer, HeaderTitle, LogoIcon, LogTitle } from './styled'
import { mdiRacingHelmet } from '@mdi/js'

const Header = () => {
  const history = useHistory()
  return (
    <AppBar>
      <Toolbar>
        <ButtonContainer>
          <Button color={'inherit'} onClick={() => goToFeed(history)}>
            <LogoIcon
              size={1.3}
              path={mdiRacingHelmet}
            />
            <HeaderTitle variant={'h6'}>LabEddit</HeaderTitle>
          </Button>
          <Button color={'inherit'} variant={'contained'} onClick={() => null}>
            <LogTitle color={'primary'} variant={'h6'}>LogOut</LogTitle>
          </Button>
        </ButtonContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header