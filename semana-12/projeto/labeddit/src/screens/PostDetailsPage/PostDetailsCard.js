import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CommentsCounter, PostCardDetailsContainer } from './styled'
import { timePassed } from '../../actions/timePassed'
import { Button, CardActions } from '@material-ui/core'

const PostDetailsCard = props => {
  

  return (
    <PostCardDetailsContainer onClick={props.onClick}>
      <CardContent>
        <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
          u/{props.username} {timePassed(props.createdAt)}
        </Typography>
        <Typography variant="h6" component="h3">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <CommentsCounter color="textSecondary" >{props.commentsCount} Comentários</CommentsCounter>
        </Button>
      </CardActions>
      <CardContent>
        <Typography>Blablabla</Typography>
      </CardContent>
    </PostCardDetailsContainer>
  );
}

export default PostDetailsCard