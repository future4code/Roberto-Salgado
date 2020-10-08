import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToPostsFeed } from '../../routes/Coordinator'
import { ButtonContainer, HeaderTitle, LogoIcon, LogTitle } from './styled'
import { mdiRacingHelmet } from '@mdi/js'

const Header = props => {
  const {buttonName, setButtonName} = props
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
  }

  const HeaderAction = () => {
    const token = localStorage.getItem('token')
    if(token) {
      logout()
      setButtonName('Login')
    }
    goToLogin(history)
  }

  return (
    <AppBar>
      <Toolbar>
        <ButtonContainer>
          <Button color={'inherit'} onClick={() => goToPostsFeed(history)}>
            <LogoIcon
              size={1.3}
              path={mdiRacingHelmet}
            />
            <HeaderTitle variant={'h6'}>LabEddit</HeaderTitle>
          </Button>
          <Button color={'inherit'} variant={'contained'} onClick={HeaderAction}>
            <LogTitle color={'primary'} variant={'h6'}>{buttonName}</LogTitle>
          </Button>
        </ButtonContainer>
      </Toolbar>
    </AppBar>
  )
}

export default Header