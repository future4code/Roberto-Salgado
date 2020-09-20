import { useState, useEffect } from 'react'
import {
  getTrips,
} from '../actions/requests'

export const useGetTrips = (url, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    getTrips(url, setData)
  }, [url])

  return data
}