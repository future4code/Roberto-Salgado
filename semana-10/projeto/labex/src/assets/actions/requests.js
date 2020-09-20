import axios from 'axios'
import { baseUrl } from '../constants/axiosConstants'
import { 
  goToListTripsPage,
} from '../actions/goToPages'

export const login = (body, history, parameter) => {
  axios
    .post(`${ baseUrl }/login`, body)
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
