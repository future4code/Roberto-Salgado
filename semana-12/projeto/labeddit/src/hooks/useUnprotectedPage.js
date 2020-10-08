import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { goToPostsFeed } from "../routes/Coordinator"

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      goToPostsFeed(history)
    }
  }, [history])
}

export default useUnprotectedPage