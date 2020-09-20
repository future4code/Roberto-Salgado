import axios from 'axios'
import { 
  goToListTripsPage,
} from '../actions/goToPages'

export const login = (url, body, history, parameter) => {
  axios
    .post(url, body)
    .then(response => {
      localStorage.setItem("token", response.data.token)
      goToListTripsPage(history)
    })
    .catch(err => {
      console.log(err.message)
      alert("E-mail e/ou senha inválidos")
      parameter()
    })
}

export const getTrips = (url, setData) => {
  axios
    .get(url)
    .then(response => {
      setData(response.data.trips)
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const applyToTrip = (url, body) => {
  axios
    .post(url, body)
    .then(response => {
      alert(response.data.message)
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const createTrip = (url, body, history) => {
  axios
    .post(url, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then(response => {
      alert(`Viagem "${ response.data.trip.name }" criada com sucesso!`)
      goToListTripsPage(history)
    })
    .catch(err => {
      console.log(err)
    })
}