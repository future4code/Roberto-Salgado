import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToPostsFeed } from '../routes/Coordinator'

export const login = (body, history, setButtonName) => {
  axios.post(`${baseUrl}/login`, body)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      goToPostsFeed(history)
      setButtonName('Logout')
    })
    .catch(err => {
      console.log(err)
      alert("Falha no login, tente novamente")
    })
}

export const signUp = (body, history, setButtonName) => {
  axios.post(`${baseUrl}/signup`, body)
  .then(response => {
    localStorage.setItem('token', response.data.token)
    goToPostsFeed(history)
    setButtonName('Logout')
  })
  .catch(err => {
    console.log(err.message)
    alert("Falha no cadastro, tente novamente")
  })
}