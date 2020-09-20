import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToApplicationFormPage, goToLoginPage } from '../../actions/goToPages'
import { 
  HomePageWrapper, 
  NavButtonsWrapper, 
} from './styled'

const HomePage = () => {
  const history = useHistory()

  return (
    <HomePageWrapper>
      <h2>Home</h2>
      <NavButtonsWrapper>
        <button onClick={ () => goToApplicationFormPage(history) }>
          Ir para Formulário de Inscrição
        </button>
        <button onClick={ () => goToLoginPage(history) }>
          Ir para Login
        </button>
      </NavButtonsWrapper>
    </HomePageWrapper>
  )
}

export default HomePage