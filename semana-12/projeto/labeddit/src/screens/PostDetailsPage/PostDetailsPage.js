import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostDetailsPage = () => {
  useProtectedPage()
  return <div>Post Details Page</div>
}

export default PostDetailsPage