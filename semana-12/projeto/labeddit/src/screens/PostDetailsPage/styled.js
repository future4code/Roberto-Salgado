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

export const PostContentWrapper = styled(CardContent)`
  padding: 0.5rem;

  :last-child {
    padding-bottom: 0.5rem;
  }
`

export const VoteButton = styled(Button)`
  height: 24px;
  min-width: 24px;
  padding: 0;
`

export const VoteIcon = styled(Icon)`
  color: ${props => {
    if (props.vote === "up" && props.uservotedirection === 1) {return "#FF4400"}
    if (props.vote === "up" && props.uservotedirection !== 1) {return "#878A8C"}
    if (props.vote === "down" && props.uservotedirection === -1) {return "#7193FF"}
    if (props.vote === "down" && props.uservotedirection !== -1) {return "#878A8C"}
  }};

  :hover {
    color: ${props => {
      if (props.vote === "up" && props.uservotedirection === 1) {return "#FF4400"}
      if (props.vote === "up" && props.uservotedirection !== 1) {return "#CC3600"}
      if (props.vote === "down" && props.uservotedirection === -1) {return "#7193FF"}
      if (props.vote === "down" && props.uservotedirection !== -1) {return "#5A75CC"}
    }}
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
  padding-top: 0.5rem;
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
  gap: 0.5rem;
  padding: 0.5rem;
`

export const CommentCardContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`

export const CommentHeader = styled.div`
  display: flex;
  gap: 0.5em;
`

export const CommentWrapper = styled.div`
  margin-left: 1rem;
`

export const CommentVotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`