import React from 'react'
import { CardContainer, TaskListItem } from './styled'

const DayCard = props => {
  return (
    <CardContainer>
      <h3>{ props.day }</h3>
      <ul>
        { props.tasks.sort((a, b) => {
            return (a.hour - b.hour)
          }).map(item => {
            return (
              <TaskListItem
                key={ item.id }
                data-testid="task-content"
                done={ item.done }
                onClick={ () => props.click(item) }
                onDoubleClick={ () => props.doubleClick(item.id) }
              >
                { item.hour } h: { item.task }
              </TaskListItem>
            )
        }) }
      </ul>
    </CardContainer>
  )
}

export default DayCard