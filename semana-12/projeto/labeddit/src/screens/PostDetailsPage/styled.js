import styled from 'styled-components'
import { Button, Card, CardContent, Typography } from '@material-ui/core'
import Icon from '@mdi/react'

export const DetailsCardContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
  margin: 10px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const PostDetailsCardContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
  margin: 10px;
`

export const PostDetailsContainer = styled.div`
  display: flex;
`

export const PostVotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0 0 1em;
`

export const VoteButton = styled(Button)`
  height: 24px;
  min-width: 24px;
  padding: 0;
`

export const UpVoteIcon = styled(Icon)`
  color: #878A8C;

  :hover {
    color: #CC3600;
  }
`

export const DownVoteIcon = styled(Icon)`
  color: #878A8C;

:hover {
  color: #5A75CC;
}
`

export const VotesCounter = styled(Typography)`
  font-weight: 700;
`

export const CommentsCounter = styled(Typography)`
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4em;
`

export const CommentCardContainer = styled.div`
  margin: 20px 0;
`

export const AddCommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
`

export const CommentsContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`