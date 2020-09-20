import styled from 'styled-components'

export const LoginScreenWrapper = styled.div`
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
    width: 100%;
  }

  input[type=email], 
  input[type=password] {
    width: 100%;
    padding: 0.8em 0.4em;
  }

  button {
    align-self: center;
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.8em 0.4em;
    cursor: pointer;
  }
`

export const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em 0;
`