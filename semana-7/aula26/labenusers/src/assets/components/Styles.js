import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`

export const ToggleSection = styled.button`
  margin: 10px 0;
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px dotted red;
  min-width: 265px;
  padding: 25px;
`

export const RegisterTitle = styled.h1`
  margin: 0 0 1rem 0;
`

export const RegisterData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
`

export const RegisterButton = styled.button`
  padding: 0.4em 0.8em;
  border: none;
  background-color: crimson;
  color: white;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: darkred;
  }

  :active {
    outline-color: black;
    outline-style: solid;
    outline-width: 3px;
    outline-offset: -3px;
  }
`

export const UsersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  min-width: 300px;

  h2 {
    margin: 0.4em 0 0 0;
  }
`

export const SearchContainer = styled.div`
  margin: 1em 0 0.8em 0;

  input {
    margin-right: 0.4em;
  }
`

export const UsersListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed crimson;
  padding: 0.8em 1.6em 0.2em 0.4em;
  cursor: help;
`

export const DeleteButton = styled.span`
  margin-left: 1.5em;
  color: red;
  font-weight: 600;
  cursor: pointer;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed crimson;
`

export const UserDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`