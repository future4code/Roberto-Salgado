import React from 'react'
import LabEdditLogo from '../../assets/img/logo.png'
import { Button } from '@material-ui/core'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = props => {
  const history = useHistory()
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage alt={'logo'} src={LabEdditLogo} />
      <LoginForm setButtonName={props.setButtonName}/>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          color={'primary'}
          fullWidth
        >
          Não tem cadastro? Cique aqui
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage