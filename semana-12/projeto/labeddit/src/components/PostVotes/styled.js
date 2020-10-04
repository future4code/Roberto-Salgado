import styled from "styled-components"
import { Button, Typography } from "@material-ui/core"
import Icon from "@mdi/react"

export const PostVotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0 0 1em;
`

export const VoteButton = styled(Button)`
  height: 24px;
  min-width: 24px;
  padding: 0;
`

export const VoteIcon = styled(Icon)`
  color: #878A8C;

  :hover {
    color: ${
      props => props.vote === 'up' ? "#CC3600" : "#5A75CC"
    }
  }
`

export const VotesCounter = styled(Typography)`
  font-weight: 700;
`