import styled from 'styled-components'
import { Card, Fab } from '@material-ui/core'

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