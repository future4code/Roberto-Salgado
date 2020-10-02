import React from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { Button, CardActions, CardContent, Typography } from '@material-ui/core'
import Loading from '../../components/Loading/Loading'
import { DetailsCardContainer, DetailsContainer } from './styled'

const PostDetailsPage = () => {
  useProtectedPage()
  const {id} = useParams()
  const post = useRequestData({}, `/posts/${id}`).post
  console.log(post)

  const renderDetails = () => (
    <DetailsCardContainer>
      <CardContent>
        <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
          Postado por {post.username} as {post.createdAt}
        </Typography>
        <Typography variant="h6" component="h3">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{post.commentsCount} comentários</Button>
      </CardActions>
      <CardContent>
        <Typography>Blablabla</Typography>
      </CardContent>
    </DetailsCardContainer>
  )
  
  return (
    <DetailsContainer>
      {post ? renderDetails(): <Loading/>}
    </DetailsContainer>
  )
}

export default PostDetailsPage