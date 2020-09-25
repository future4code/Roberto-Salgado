import axios from 'axios'

export const getTasks = (url, setData) => {
  axios
    .get(url)
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export const createTask = (url, body, reset, update) => {
  axios
    .post(url, body)
    .then(response => {
      console.log(response.data)
      reset()
      update()
    })
    .catch(err => {
      console.log(err)
    })
}

export const editTask = (url, body, update) => {
  axios
    .put(url, body)
    .then(response => {
      console.log(response.data)
      update()
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteTask = (url) => {
  axios
    .delete(url)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err)
    })
}