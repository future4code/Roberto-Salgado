import axios from "axios"
import { baseUrl } from "../constants/urls"

export const getPosts = (endpoint, setData) => {
  axios.get(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then(response => setData(response.data))
    .catch(err => alert(err.message))
}

export const addPost = (body, endpoint, close, update, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}${endpoint}`, body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => {
      close()
      update()
      setIsLoading(false)
    })
    .catch(err => {
      setIsLoading(false)
      alert(err.message)
    })
}

export const votePost = (body, endpoint, update) => {
  axios.put(`${baseUrl}${endpoint}`, body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
    .then(() => update())   
    .catch((err) => console.log(err))   
}