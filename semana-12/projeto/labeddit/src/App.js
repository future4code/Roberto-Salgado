import React, { useState } from 'react'
import theme from './constants/theme'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import styled from 'styled-components'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`

const App = () => {
  const token = localStorage.getItem('token')
  const [buttonName, setButtonName] = useState(token ? 'Logout' : 'Login')
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Header buttonName={buttonName} setButtonName={setButtonName}/>
        <CssBaseline/>
        <InnerScreenContainer>
          <Router setButtonName={setButtonName}/>
        </InnerScreenContainer>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App