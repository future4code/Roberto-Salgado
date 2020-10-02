import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../constants/urls'

const useRequestData = (initialState, endpoint) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        console.log(err)
        alert('Ocorreu um erro. Tente novamente.')
      })

    }, [endpoint])
    
    return data
  }
  
export default useRequestData