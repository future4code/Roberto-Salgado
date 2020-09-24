import styled from 'styled-components'

export const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 0 0.4rem;
    margin-left: 0.4rem;
  }
`

export const TasksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.8em;
  height: 90vh;
`