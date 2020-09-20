import { useState, useEffect } from 'react'
import {
  login,
} from '../actions/requests'

export const useLogin = (url, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    login(url, setData)
  }, [url])

  const updateData = () => {
    login(url, setData)
  }

  return [data, updateData]
}