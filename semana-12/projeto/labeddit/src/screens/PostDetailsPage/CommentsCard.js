import React from 'react'
import { Typography } from '@material-ui/core'
import { timePassed } from '../../actions/timePassed'
import { CommentCardContainer, CommentHeader, CommentWrapper } from './styled'
import CommentVotes from './CommentVotes'

const CommentCard = props => {
  return (
    <CommentCardContainer>
      <CommentVotes
        votesCount={props.votesCount}
        postId={props.postId}          
        commentId={props.commentId}          
        uservotedirection={props.uservotedirection}
        updateComments={props.updateComments}
      />
      <CommentWrapper>
        <CommentHeader>
          <Typography variant='caption' component='span' gutterBottom>
            Postado por u/{props.username}
          </Typography>
          <Typography variant='caption' component='span' color="textSecondary" gutterBottom>
            {props.votesCount} pontos · {timePassed(props.createdAt)}
          </Typography>
        </CommentHeader>
        <Typography variant="body1" component="p">
          {props.text}
        </Typography>
      </CommentWrapper>
    </CommentCardContainer>
  )
}

export default CommentCard