import React from 'react'
import {
  PostVotesContainer,
  VoteButton,
  VoteIcon,
  VotesCounter
} from './styled'
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js'

const PostVotes = props => {
  return (
    <PostVotesContainer>
      <VoteButton size={'small'}>
        <VoteIcon up size={0.8} path={mdiArrowUpBold}/>
      </VoteButton>
      <VotesCounter variant="caption" >{props.votesCount}</VotesCounter>
      <VoteButton>
        <VoteIcon down size={0.8} path={mdiArrowDownBold}/>
      </VoteButton>
    </PostVotesContainer>
  )
}

export default PostVotes