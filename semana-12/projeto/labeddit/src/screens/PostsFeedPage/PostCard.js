import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CommentsCounter, PostCardContainer } from './styled'
import { timePassed } from '../../actions/timePassed'
import Icon from '@mdi/react'
import { mdiComment } from '@mdi/js'

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
          <CommentsCounter variant='caption' color="textSecondary">
            <Icon size={0.6} path={mdiComment}/>
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