import React from 'react'
import { Typography } from '@material-ui/core'
import { timePassed } from '../../actions/timePassed'
import { CommentCardContainer } from './styled'

const CommentCard = props => {
  return (
    <CommentCardContainer>
      <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
        Postado por u/{props.username} · {timePassed(props.createdAt)}
      </Typography>
      <Typography variant="body1" component="p">
        {props.text}
      </Typography>
    </CommentCardContainer>
  )
}

export default CommentCard