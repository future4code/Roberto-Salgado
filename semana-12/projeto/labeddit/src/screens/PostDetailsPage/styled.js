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
  font-weight: 700;
`

export const CommentCardContainer = styled.div`
  margin: 20px 0;
`

export const AddCommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`