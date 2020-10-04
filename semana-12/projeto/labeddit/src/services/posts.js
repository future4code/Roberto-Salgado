import axios from "axios"
import { baseUrl } from "../constants/urls"

export const getPosts = (endpoint, setData) => {
  axios.get(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then(response => setData(response.data))
    .catch(err => {
      console.log(err)
      alert(err.message)
    })
}

export const addPost = (body, endpoint, close, update, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}${endpoint}`, body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => {
      close()
      update()
      setIsLoading(false)
      // alert("Post adicionado com sucesso!")
    })
    .catch(err => {
      console.log(err)
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