import React from 'react'
import {
  DownVoteIcon,
  PostVotesContainer,
  UpVoteIcon,
  VoteButton,
  VotesCounter
} from './styled'
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js'

const PostVotes = props => {
  return (
    <PostVotesContainer>
      <VoteButton size={'small'}>
        <UpVoteIcon
          size={0.8}
          path={mdiArrowUpBold}
        />
      </VoteButton>
        <VotesCounter variant="caption" >{props.votesCount}</VotesCounter>
      <VoteButton>
        <DownVoteIcon
          size={0.8}
          path={mdiArrowDownBold}
        />
      </VoteButton>
    </PostVotesContainer>
  )
}

export default PostVotes