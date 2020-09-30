import React from 'react'
import LabEdditLogo from '../../assets/img/logo.png'
import { ScreenContainer, LogoImage } from './styled'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = props => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage alt={'logo'} src={LabEdditLogo} />
      <SignUpForm setButtonName={props.setButtonName}/>
    </ScreenContainer>
  )
}

export default SignUpPage