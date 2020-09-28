import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  goToApplicationFormPage,
  goToLoginPage,
  goToSignupPage,
  goToListTripsPage,
} from '../../actions/goToPages'
import { 
  HomePageWrapper, 
  NavButtonsWrapper, 
} from './styled'

const HomePage = () => {
  const history = useHistory()

  const token = window.localStorage.getItem("token")

  return (
    <HomePageWrapper>
      <h2>Home</h2>
      <NavButtonsWrapper>
        <button onClick={ () => goToApplicationFormPage(history) }>
          Ir para Formulário de Inscrição
        </button>
        { token ? (
          <button onClick={ () => goToListTripsPage(history) }>
            Ir para Área do Usuário
          </button>
        ) : (
          <div>
            <button onClick={ () => goToSignupPage(history) }>
              Criar novo usuário
            </button>
            <button onClick={ () => goToLoginPage(history) }>
              Fazer Login
            </button>
          </div>
        ) }
        
      </NavButtonsWrapper>
    </HomePageWrapper>
  )
}

export default HomePage