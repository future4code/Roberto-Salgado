import React from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const history = useHistory()

  const goToApplicationFormPage = (history) => {
    history.push("/application-form")
  }

  const goToLoginPage = (history) => {
    history.push("/login")
  }

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