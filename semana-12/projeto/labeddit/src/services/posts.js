import axios from "axios"
import { baseUrl } from "../constants/urls"
import { goToPostsFeed } from "../routes/Coordinator"

export const addPost = (body, url, history, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${baseUrl}${url}`, body, {
    headers:{
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => {
      setIsLoading(false)
      alert("Post adicionado com sucesso!")
      goToPostsFeed(history)
    })
    .catch(err => {
      console.log(err)
      setIsLoading(false)
      alert("Não foi possível adicionar o post. Tente novamente.")
    })
}