import styled from 'styled-components'

export const CreateTripScreenWrapper = styled.div`
	max-width: 400px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 0 25%;
    border-bottom: 3px solid crimson;
  }
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 1em;

  label {
  }

  input[type=text], 
  input[type=text],  
  input[type=number], 
  select {
    width: 100%;
    padding: 0.8em 0.4em;
  }

  input[type=date] {
    width: 100%;
    padding: 0.4em;
    text-align: center;
  }

  textarea {
    width: 100%;
    height: 4em;
    padding: 0.8em;
  }

  button {
    width: 50%;
    align-self: center;
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.8em 0;
    margin: 1em 0;
    cursor: pointer;
  }
`

export const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`