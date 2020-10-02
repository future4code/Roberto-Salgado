import axios from "axios"
import { baseUrl } from "../constants/urls"

export const addComment = (body, endpoint, /* setIsLoading */) => {
  // setIsLoading(true)
  axios.post(`${baseUrl}${endpoint}`, body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => {
      // setIsLoading(false)
      alert("Comentário adicionado com sucesso!")
    })
    .catch(err => {
      console.log(err)
      // setIsLoading(false)
      alert(err.message)
    })
}