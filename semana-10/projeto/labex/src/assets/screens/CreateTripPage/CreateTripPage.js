import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {
  goToHomePage,
  goToTripDetailsPage,
  goToListTripsPage,
  goBack
} from '../../actions/goToPages'
import { useForm } from '../../hooks/useForm'
import { baseUrl } from '../../constants/axiosConstants'

const CreateTripPage = () => {
  const { form, onChange, resetState } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0
  })
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    token || history.push("/login")
  }, [history])

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

    axios
      .post(`${ baseUrl }/trips`, body, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response.data)
        resetState()
        goToListTripsPage(history)
      })
  }

  return (
    <div>
      <p>Criar Viagem</p>
      <form onSubmit={ handleSubmittion } >
        <label>
          Nome:
          <input 
            value={ form.name }
            name="name"
            onChange={ handleInputChange }
            type="text"
            pattern="[A-Za-z]{5,}"
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
            required
          >
            <option value="Mercúrio">Mercúrio</option>
            <option value="Venus">Venus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
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
            title="No minimo 50"
            required
          />
        </label>
        <button>Criar</button>
      </form>

      <button onClick={ () => goToHomePage(history) }>
        Ir para Home
      </button>
      <button onClick={ () => goToTripDetailsPage(history) }>
        Ir para Detalhes da Viagem
      </button>
      <button onClick={ () => goToListTripsPage(history) }>
        Ir para Lista de Viagens
      </button>
      <button onClick={ () => goBack(history) }>
        Voltar
      </button>
    </div>
  )
}

export default CreateTripPage