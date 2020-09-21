import React from 'react'
import {
  ApprovedCardWrapper,
  DetailsSpan,
  ApprovedApplicationTextLabel,
  ApprovedApplicationText,
} from './styled'

const ApprovedCard = (props) => {
  return (
    <ApprovedCardWrapper>
      <h5>Nome: <DetailsSpan>{ props.candidateName }</DetailsSpan></h5>
      <h5>Idade: <DetailsSpan>{ props.candidateAge }</DetailsSpan></h5>
      <h5>País: <DetailsSpan>{ props.candidateCountry }</DetailsSpan></h5>
      <ApprovedApplicationTextLabel>
        Texto de inscrição:
      </ApprovedApplicationTextLabel>
      <ApprovedApplicationText>
        { props.candidateApplicationText }
      </ApprovedApplicationText>
    </ApprovedCardWrapper>
  )
}

export default ApprovedCard