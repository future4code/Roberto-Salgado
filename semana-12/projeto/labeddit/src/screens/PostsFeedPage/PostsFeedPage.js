import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToLogin } from '../../routes/Coordinator'

const PostsFeedPage = () => {
  useProtectedPage()
  return <div>Posts Feed Page</div>
}

export default PostsFeedPage