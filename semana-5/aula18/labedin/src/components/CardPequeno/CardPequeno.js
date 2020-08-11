import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <h4>{ props.informacao }</h4>
      <p>{ props.detalhe }</p>
    </div>
  )
}

export default CardPequeno