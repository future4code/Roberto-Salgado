import React from 'react'
import { CardContainer } from './styled'

const DayCard = props => {
  return (
    <CardContainer>
      <h3>{ props.day }</h3>
      <ul>
        { props.tasks.map(item => {
          <li
            // onClick={}
            // onDoubleClick={}
          >
            `${ item.hour } h: ${ item.text }`
          </li>
        }) }
      </ul>
    </CardContainer>
  )
}

export default DayCard