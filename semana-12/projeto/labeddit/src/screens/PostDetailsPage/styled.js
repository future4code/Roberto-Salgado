import styled from 'styled-components'
import { Card, Typography } from '@material-ui/core'

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

export const PostCardDetailsContainer = styled(Card)`
  width: 80vw;
  max-width: 800px;
  margin: 10px;
`

export const CommentsCounter = styled(Typography)`
  text-transform: none;
  font-weight: 700;
`