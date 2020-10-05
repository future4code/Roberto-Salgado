import styled from "styled-components"
import { Button, Typography } from "@material-ui/core"
import Icon from "@mdi/react"

export const PostVotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  
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