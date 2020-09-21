import styled from 'styled-components'

export const HomePageWrapper = styled.div`
	max-width: 560px;
  margin: 0 auto;
  
  h2 {
    text-align: center;
    margin: 0 25%;
    border-bottom: 3px solid crimson;
  }
`

export const NavButtonsWrapper = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;

  div {
    display: inline-block;
    width: 320px;
  }

  button {
    display: inline-block;
    width: 320px;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.8em 0.4em;
    cursor: pointer;
  }
`