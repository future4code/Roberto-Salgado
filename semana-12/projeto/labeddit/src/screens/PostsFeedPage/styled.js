import styled from 'styled-components'
import { Card, CardActions, CardContent, Fab, Typography } from '@material-ui/core'

export const PostCardContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
  margin: 10px;
  display: flex;
`

export const PostVotesWrapper = styled.div`
  background-color: #F8F9FA;
`

export const PostWrapper = styled.div`
  cursor: pointer;
`

export const PostContentWrapper = styled(CardContent)`
  padding: 0.5rem;
`

export const PostActionsWrapper = styled(CardActions)`
  padding: 0.5rem;
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const AddPostButton = styled(Fab)`
  position: fixed;
  right: 15px;
  bottom: 15px;
`

export const AddPostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  margin-bottom: 20px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const CommentsCounter = styled(Typography)`
  text-transform: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4em;
`