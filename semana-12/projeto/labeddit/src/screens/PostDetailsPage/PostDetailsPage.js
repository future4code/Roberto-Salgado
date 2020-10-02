import React from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { Button, CardActions, CardContent, Typography } from '@material-ui/core'
import Loading from '../../components/Loading/Loading'
import { DetailsCardContainer, DetailsContainer } from './styled'
import { timePassed } from '../../actions/timePassed'
import PostDetailsCard from './PostDetailsCard'

const PostDetailsPage = () => {
  useProtectedPage()
  const {id} = useParams()
  const [details, updadateDetails] = useRequestData({}, `/posts/${id}`)

  const post = details.post

  const renderDetails = () => (
    <PostDetailsCard
      username={post.username}
      createdAt={post.createdAt}
      title={post.title}
      text={post.text}
      commentsCount={post.commentsCount}
      comments={post.comments}
    />
  )
  
  console.log(post)
  
  return (
    <DetailsContainer>
      {post ? renderDetails(): <Loading/>}
    </DetailsContainer>
  )
}

export default PostDetailsPage