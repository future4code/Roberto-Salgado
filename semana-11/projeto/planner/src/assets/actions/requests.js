import axios from 'axios'

export const getTasks = (url, setData) => {
  axios
    .get(url)
    .then(response => {
      setData(response.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export const createTasks = (url, body, parameter) => {
  axios
    .post(url, body)
    .then(response => {
      console.log(response.data)
      parameter()
    })
    .catch(err => {
      console.log(err)
    })
}