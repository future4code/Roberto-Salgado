import styled from 'styled-components'

export const ListTripsScreenWrapper = styled.div`
	max-width: 480px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 0 25%;
    border-bottom: 3px solid crimson;
  }
`

export const TripsListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  button {
    margin: 1.6em 0.8em;
    font-size: 1em;
    font-weight: 700;
    padding: 0.4em 0;
    cursor: pointer;
  }
`

export const TripsListItem = styled.div`
  border-bottom: 1px dashed crimson;
  margin-bottom: 1.2em;
  padding: 0 1.2em;
  cursor: pointer;
`

export const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 0;
`

