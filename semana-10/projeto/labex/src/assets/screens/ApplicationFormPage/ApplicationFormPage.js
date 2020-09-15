import React from 'react'
import { useHistory } from 'react-router-dom'

const ApplicationFormPage = () => {
  const history = useHistory()

  const goToHomePage = (history) => {
    history.push("/")
  }

  const goBack = (history) => {
    history.goBack()
  }

  return (
    <div>
      <p>Formulário de Inscrição</p>
      <button onClick={ () => goToHomePage(history) }>
        Ir para Home
      </button>
      <button onClick={ () => goBack(history) }>
        Voltar
      </button>
    </div>
  )
}

export default ApplicationFormPage