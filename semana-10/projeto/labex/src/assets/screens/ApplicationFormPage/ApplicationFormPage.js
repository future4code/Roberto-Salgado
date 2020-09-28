import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../actions/goToPages'
import { useForm } from '../../hooks/useForm'
import { baseUrl } from '../../constants/axiosConstants'
import { countriesList } from '../../constants/Lists'
import { useGetTrips } from '../../hooks/useRequestData'
import { applyToTrip } from '../../actions/requests'
import { 
  ApplicationScreenWrapper,
  FormWrapper, 
  NavButtonsWrapper, 
} from './styled'

const ApplicationFormPage = () => {
  const tripsList = useGetTrips(`${ baseUrl }/trips`, [])
  const { form, onChange, resetState } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    tripId: "",
  })
  const history = useHistory()

  const handleInputChange = event => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleSubmittion = event => {
    event.preventDefault()

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }
    const tripId = form.tripId

    applyToTrip(`${ baseUrl }/trips/${ tripId }/apply`, body)

    resetState()
  }

  return (
    <ApplicationScreenWrapper>
      <h2>Formulário de Inscrição</h2>
      <FormWrapper onSubmit={ handleSubmittion } >
        <label>
          Nome: {" "}
          <input 
            value={ form.name }
            name="name"
            onChange={ handleInputChange }
            type="text"
            pattern="[A-Za-z]{3,}"
            title="No minimo 3 letras"
            width="320px"
            required
          />
        </label>
        <label>
          Idade: {" "}
          <input 
            value={ form.age }
            name="age"
            onChange={ handleInputChange }
            type="number"
            min="18"
            title="Deve ter mais do que 18 anos de idade"
            required
          />
        </label>
        <label >
          Texto de Inscrição:
          <textarea
            value={ form.applicationText }
            name="applicationText"
            onChange={ handleInputChange }
            minLength="30"
            title="No minimo 30 letras"
            placeholder="Porque sou um bom candidato(a)?"
            required
          />
        </label>
        <label>
          Profissão: {" "}
          <input 
            value={ form.profession }
            name="profession"
            onChange={ handleInputChange }
            type="text"
            pattern="[A-Za-z\s]{10,}"
            title="No minimo 10 caracteres"
            required
          />

        </label>
        <label>
          País: {" "}
          <select 
            value={ form.country }
            name="country"
            onChange={ handleInputChange }
            title="Escolha um país"
            required
          >
            <option value=""></option>
            { countriesList.map(country => {
              return (
                <option key={ country } value={ country }>{ country }</option>
              )
            }) }
          </select>
        </label>
        <label>
          Viagem: {" "}
          <select 
            value={ form.tripId }
            name="tripId"
            onChange={ handleInputChange }
            title="Escolha uma Viagem!"
            required
          >
            <option value=""></option>
            { tripsList.map(item => {
              return (
                <option key={ item.id } value={ item.id }>
                  { item.name } - { item.planet }
                </option>
              )
            }) }
          </select>
        </label>
        <button>Inscrever-se</button>
      </FormWrapper>
      <NavButtonsWrapper>
        <button onClick={ () => goToHomePage(history) }>
          Voltar para Home
        </button>
      </NavButtonsWrapper>
    </ApplicationScreenWrapper>
  )
}

export default ApplicationFormPage