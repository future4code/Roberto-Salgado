import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToApplicationFormPage, goToLoginPage } from '../../actions/goToPages'

const HomePage = () => {
  const history = useHistory()

  return (
    <div>
      <p>Home</p>
      <button onClick={ () => goToApplicationFormPage(history) }>
        Ir para Formulário de Inscrição
      </button>
      <button onClick={ () => goToLoginPage(history) }>
        Ir para Formulário de Inscrição
      </button>
    </div>
  )
}

export default HomePage