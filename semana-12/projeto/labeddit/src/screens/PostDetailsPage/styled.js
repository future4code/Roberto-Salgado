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

export const VoteButton = styled(Button)`
  height: 24px;
  min-width: 24px;
  padding: 0;
`

export const VoteIcon = styled(Icon)`
  color: #878A8C;

  :hover {
    color: ${props => props.up ? "#CC3600" : "#5A75CC"}
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

export const CommentCardContainer = styled.div`
  margin: 20px 0;
  display: flex;
`

export const CommentHeader = styled.div`
  display: flex;
  gap: 0.5em;
`

export const CommentWrapper = styled.div`
  margin-left: 16px;
`

export const CommentVotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 1em 0 0 1em; */
`