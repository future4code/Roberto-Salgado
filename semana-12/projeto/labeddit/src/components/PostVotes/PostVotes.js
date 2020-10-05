import React from 'react'
import {
  PostVotesContainer,
  VoteButton,
  VoteIcon,
  VotesCounter
} from './styled'
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js'
import { votePost } from '../../services/posts'

const PostVotes = props => {
  
  const style = {
    color: (
      props.uservotedirection === 1 ? "#FF4500" : (
        props.userdotedirection === -1 ? "#7193FF" : "inherit"
      )
    )
  }

  const onClickUpVotePost = () => {
    const body = {direction: props.uservotedirection === 1 ? 0 : 1}
    votePost(body, `/posts/${props.postId}/vote`, props.updatePosts)
  }

  const onClickDownVotePost = () => {
    const body = {direction: props.uservotedirection === -1 ? 0 : -1}
    votePost(body, `/posts/${props.postId}/vote`, props.updatePosts)
  }

  return (
    <PostVotesContainer>
      <VoteButton onClick={onClickUpVotePost}>
        <VoteIcon
          vote="up"
          size={0.8}
          uservotedirection={props.uservotedirection}
          path={mdiArrowUpBold}
        />
      </VoteButton>
      <VotesCounter
        variant="caption"
        style={style}
        uservotedirection={props.uservotedirection}
      >
        {props.votesCount}
      </VotesCounter>
      <VoteButton onClick={onClickDownVotePost}>
        <VoteIcon
          vote="down"
          size={0.8}
          uservotedirection={props.uservotedirection}
          path={mdiArrowDownBold}
        />
      </VoteButton>
    </PostVotesContainer>
  )
}

export default PostVotes