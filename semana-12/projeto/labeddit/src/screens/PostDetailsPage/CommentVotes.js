import React from 'react'
import {
  CommentVotesContainer,
  VoteButton,
  VoteIcon,
} from './styled'
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js'
import { voteComment } from '../../services/comments'

const CommentVotes = props => {

  const onClickUpVoteComment = () => {
    const body = {direction: props.userVoteDirection === 1 ? 0 : 1}
    voteComment(
      body,
      `/posts/${props.postId}/comment/${props.commentId}/vote`,
      props.updateComments
    )
  }

  const onClickDownVoteComment = () => {
    const body = {direction: props.userVoteDirection === -1 ? 0 : -1}
    voteComment(
      body,
      `/posts/${props.postId}/comment/${props.commentId}/vote`,
      props.updateComments
    )
  }

  return (
    <CommentVotesContainer>
      <VoteButton onClick={onClickUpVoteComment}>
        <VoteIcon vote="down"  size={0.8} path={mdiArrowUpBold}/>
      </VoteButton>
      <VoteButton onClick={onClickDownVoteComment}>
        <VoteIcon vote="down"  size={0.8} path={mdiArrowDownBold}/>
      </VoteButton>
    </CommentVotesContainer>
  )
}

export default CommentVotes