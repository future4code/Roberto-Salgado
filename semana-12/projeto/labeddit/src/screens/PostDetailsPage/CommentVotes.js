import React from 'react'
import {
  CommentVotesContainer,
  VoteButton,
  VoteIcon,
} from './styled'
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js'

const CommentVotes = () => {
  return (
    <CommentVotesContainer>
      <VoteButton size={'small'}>
        <VoteIcon up size={0.8} path={mdiArrowUpBold}/>
      </VoteButton>
      <VoteButton>
        <VoteIcon down size={0.8} path={mdiArrowDownBold}/>
      </VoteButton>
    </CommentVotesContainer>
  )
}

export default CommentVotes