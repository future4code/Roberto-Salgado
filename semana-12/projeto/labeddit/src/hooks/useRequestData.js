import { useEffect, useState } from 'react'
import { getPosts } from '../services/posts'

const useGetPosts = (initialState, endpoint) => {
  const [data, setData] = useState(initialState)

  useEffect(() => getPosts(endpoint, setData), [endpoint])

  const updateData = () => getPosts(endpoint, setData)

  return [data, updateData]
}
  
export default useGetPosts