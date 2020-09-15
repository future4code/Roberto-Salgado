import React from 'react'
import {
  AppBarWrapper,
  ActionWrapper,
  Logo, Astro, Match,
} from './styled'

const AppBar = props => {
  return (
    <AppBarWrapper>
      <ActionWrapper>
        { props.leftAction }
      </ActionWrapper>
      <Logo>
        <Astro>astro</Astro>
        <Match>match</Match>
      </Logo>
      <ActionWrapper>
        { props.rightAction }
      </ActionWrapper>
    </AppBarWrapper>
  )
}

export default AppBar