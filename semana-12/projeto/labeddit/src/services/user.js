import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToPostsFeed } from '../routes/Coordinator'

export const login = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}/login`, body)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToPostsFeed(history)
      setButtonName('Logout')
    })
    .catch(err => alert("Falha no login, tente novamente"))
}

export const signUp = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}/signup`, body)
  .then(response => {
    localStorage.setItem('token', response.data.token)
    setIsLoading(false)
    goToPostsFeed(history)
    setButtonName('Logout')
  })
  .catch(err => alert("Falha no cadastro, tente novamente"))
}