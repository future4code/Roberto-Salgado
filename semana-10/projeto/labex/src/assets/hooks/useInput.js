import { useState } from 'react'

export const useInput = () => {
  const [value, updateValue] = useState ("")

  const handleValue = event => {
    updateValue(event.target.value)
  }

  return [value, handleValue]
}