import React from 'react'
import { decideCandidate } from '../../actions/requests'
import {
  CandidateCardWrapper,
  DetailsSpan,
  CandidateApplicationTextLabel,
  CandidateApplicationText,
  RejectButton,
  ApproveButton,
  DecideCandidateButtonWrapper,
} from './styled'

const CandidateCard = (props) => {
  return (
    <CandidateCardWrapper>
      <h5>Nome: <DetailsSpan>{ props.candidateName }</DetailsSpan></h5>
      <h5>Idade: <DetailsSpan>{ props.candidateAge }</DetailsSpan></h5>
      <h5>País: <DetailsSpan>{ props.candidateCountry }</DetailsSpan></h5>
      <CandidateApplicationTextLabel>
        Texto de inscrição:
      </CandidateApplicationTextLabel>
      <CandidateApplicationText>
        { props.candidateApplicationText }
      </CandidateApplicationText>
      <DecideCandidateButtonWrapper>
        <RejectButton 
          onClick={ () => decideCandidate(props.url, false, props.updateTrip) }
        >
          Reprovar
        </RejectButton>
        <ApproveButton
          onClick={ () => decideCandidate(props.url, true, props.updateTrip) }
        >
          Aprovar          
        </ApproveButton>
      </DecideCandidateButtonWrapper>
    </CandidateCardWrapper>
  )
}

export default CandidateCard