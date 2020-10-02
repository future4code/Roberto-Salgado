import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer } from './styled'
import { timePassed } from '../../actions/timePassed'

const PostDetailsCard = props => {
  return (
    <PostCardContainer onClick={props.onClick}>
      <CardContent>
        <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
          u/{props.username} {timePassed(props.createdAt)}
        </Typography>
        <Typography variant="body2" component="p">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.commentsCount} comentários</Button>
      </CardActions>
    </PostCardContainer>
  );
}

export default PostDetailsCard