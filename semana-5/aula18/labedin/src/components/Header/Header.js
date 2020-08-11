import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div className="header">
      <img src={ props.logo } alt="labedin" />
      <div>
        <p>{ props.link1 }</p>
        <p>{ props.link2 }</p>
        <p>{ props.link3 }</p>
        <p>{ props.link4 }</p>
        <p>{ props.link5 }</p>
      </div>
    </div>
  )
}

export default Header