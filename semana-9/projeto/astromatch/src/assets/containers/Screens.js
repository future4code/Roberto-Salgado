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
        profile={ props.profile }
        getProfile={ props.getProfile }
        goToMatchesScreen={ () => changeCurrentScreen("MatchesScreen") }
      />)
    case "MatchesScreen":
      return (<MatchesScreen
        matches={ props.matches }
        getMatches={ props.getMatches }
        goToSwipeScreen={ () => changeCurrentScreen("SwipeScreen") }
      />)
    default:
      return (<SwipeScreen
        profile={ props.profile }
        getProfile={ props.getProfile }
        goToMatchesScreen={ () => changeCurrentScreen("MatchesScreen") }
      />)
  }
}

export default Screens