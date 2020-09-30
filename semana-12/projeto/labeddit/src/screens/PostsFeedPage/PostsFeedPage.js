import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PostCard from '../../components/PostCard/PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import { goToLogin } from '../../routes/Coordinator'

const PostsFeedPage = () => {
  useProtectedPage()
  return (
    <div>
      <PostCard/>
    </div>
  )
}

export default PostsFeedPage 