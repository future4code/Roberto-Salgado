import axios from "axios"
import { baseUrl } from "../constants/urls"

export const addComment = (body, endpoint, clear, update, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}${endpoint}`, body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => {
      clear()
      update()
      setIsLoading(false)
    })
    .catch(err => {
      setIsLoading(false)
      alert(err.message)
    })
}

export const voteComment = (body, endpoint, update) => {
  axios.put(`${baseUrl}${endpoint}`, body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => update())   
    .catch((err) => console.log(err))   
}