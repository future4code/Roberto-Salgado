import React, { useState } from 'react'
import SwipeScreen from './screens/SwipeScreen/SwipeScreen'
import MatchesScreen from './screens/MatchesScreen/MatchesScreen'

const Screens = props => {
  
  const [currentScreen, setCurrentScreen] = useState("SwipeScreen")

  const changeCurrentScreen = (screen) => {
    setCurrentScreen(screen)
  }

  switch (currentScreen) {
    case "SwipeScreen":
      return (<SwipeScreen 
        goToMatchesScreen={ () => changeCurrentScreen("MatchesScreen") }
      />)
    case "MatchesScreen":
      return (<MatchesScreen
        goToSwipeScreen={ () => changeCurrentScreen("SwipeScreen") }
      />)
    // case "ProfileScreen":
    //   return (<ProfileScreen />)
    default:
      return (<h1>Error: invalid page selected</h1>)
  }
}

export default Screens