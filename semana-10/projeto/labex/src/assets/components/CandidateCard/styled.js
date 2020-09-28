import styled from 'styled-components'

export const CandidateCardWrapper = styled.div`
  width: 28%;
  height: 240px;
  padding: 0 0.8em;
  border: 1px dotted crimson;
`

export const CandidateApplicationTextLabel = styled.h5`
  margin-bottom: 0.2em;
`

export const CandidateApplicationText = styled.p`
  margin-top: 0.2em;
  font-size: 0.8em;
`

export const DetailsSpan = styled.span`
  font-weight: normal;
`

export const DecideCandidateButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const RejectButton = styled.button`
  background-color: red;
  font-weight: 700;
  color: white;
`

export const ApproveButton = styled.button`
  background-color: green;
  font-weight: 700;
  color: white;
`