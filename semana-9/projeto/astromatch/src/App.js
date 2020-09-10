import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import ClearButton from './assets/components/ClearButton/ClearButton'
import Screens from './assets/containers/Screens'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #D0D0D0;
    font-family: Roboto, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  width: 400px;
  height: 600px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MainContainer>
        <Screens />
      </MainContainer>
      <ClearButton />
    </div>  
  )
}

export default App