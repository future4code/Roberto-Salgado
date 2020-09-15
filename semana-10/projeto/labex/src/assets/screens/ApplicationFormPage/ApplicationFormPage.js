import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goBack } from '../../actions/goToPages'

const ApplicationFormPage = () => {
  const history = useHistory()

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