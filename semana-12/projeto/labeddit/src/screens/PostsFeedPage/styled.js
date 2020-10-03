import styled from 'styled-components'
import { Card, Fab, Typography } from '@material-ui/core'

export const PostCardContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
  margin: 10px;
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