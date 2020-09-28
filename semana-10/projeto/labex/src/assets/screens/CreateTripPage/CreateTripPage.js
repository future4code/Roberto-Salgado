import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  goToHomePage,
  goToListTripsPage,
} from '../../actions/goToPages'
import { useForm } from '../../hooks/useForm'
import { useProtectPage } from '../../hooks/useProtectedPage'
import { baseUrl } from '../../constants/axiosConstants'
import { planetsList } from '../../constants/Lists'
import { createTrip } from '../../actions/requests'
import {
  CreateTripScreenWrapper,
  FormWrapper,
  NavButtonsWrapper,
} from './styled'

const CreateTripPage = () => {
  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0,
  })
  const history = useHistory()

  useProtectPage()

  const handleInputChange = event => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleSubmittion = event => {
    event.preventDefault()

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date.slice(8)+"/"+form.date.slice(6, 7)+"/"+form.date.slice(0,4),
      description: form.description,
      durationInDays: form.durationInDays
    }

    createTrip(`${ baseUrl }/trips`, body, history)
  }

  return (
    <CreateTripScreenWrapper>
      <h2>Criar Viagem</h2>
      <FormWrapper onSubmit={ handleSubmittion } >
        <label>
          Nome:
          <input 
            value={ form.name }
            name="name"
            onChange={ handleInputChange }
            type="text"
            pattern="[A-Za-z\s]{5,}"
            title="No minimo 5 letras"
            required
          />
        </label>
        <label>
          Planeta:
          <select 
            value={ form.planet }
            name="planet"
            onChange={ handleInputChange }
            title="Escolha um planeta"
            required
          >
            <option value=""></option>
            { planetsList.map(planet => {
              return (
                <option key={ planet } value={ planet }>{ planet }</option>
              )
            }) }
          </select>
        </label>
        <label>
          Data:
          <input 
            value={ form.date }
            name="date"
            onChange={ handleInputChange }
            type="date"
            min={ (new Date()).toISOString().slice(0, 10) }
            title="Escolha uma data futura"
            required
          />
        </label>
        <label>
          Descrição:
          <textarea 
            value={ form.description }
            name="description"
            onChange={ handleInputChange }
            minLength="30"
            title="No minimo 30 letras"
            required
          />
        </label>
        <label>
          Dias de Duração:
          <input 
            value={ form.durationInDays }
            name="durationInDays"
            onChange={ handleInputChange }
            type="number"
            min="50"
            title="Maior do que 50"
            required
          />
        </label>
        <button>Criar</button>
      </FormWrapper>
      <NavButtonsWrapper>
        <button onClick={ () => goToListTripsPage(history) }>
          Voltar para Lista de Viagens
        </button>
        <button onClick={ () => goToHomePage(history) }>
          Ir para Home
        </button>
      </NavButtonsWrapper>
    </CreateTripScreenWrapper>
  )
}

export default CreateTripPage