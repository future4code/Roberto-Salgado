import React, { useState } from 'react'
import SwipeScreen from './screens/SwipeScreen/SwipeScreen'

const Screens = props => {
  
  const [currentPage, setCurrentPage] = useState('SwipeScreen')



  switch (currentPage) {
    case "SwipeScreen":
      return (<SwipeScreen />)
      break
    // case "MatchScreen":
    //   return (<MatchScreen />)
    //   break
    // case "ProfileScreen":
    //   return (<ProfileScreen />)
    //   break
    default:
      return (<h1>Error: invalid page selected</h1>)
      break
  }
}

export default Screens