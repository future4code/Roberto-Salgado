import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CommentsCounter, PostCardContainer } from './styled'
import { timePassed } from '../../actions/timePassed'

const PostCard = props => {
  return (
    <PostCardContainer onClick={props.onClick}>
      <CardContent>
        <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
          Postado por u/{props.username} · {timePassed(props.createdAt)}
        </Typography>
        <Typography variant="h6" component="h3">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <CommentsCounter color="textSecondary">
          {props.commentsCount}
          {" "}
          {props.commentsCount === 1 ? "Comentário" : "Comentários"}
          </CommentsCounter>
        </Button>
      </CardActions>
    </PostCardContainer>
  );
}

export default PostCard