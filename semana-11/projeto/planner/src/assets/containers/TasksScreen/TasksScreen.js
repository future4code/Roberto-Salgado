import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useGetTasks } from '../../hooks/useRequestData'
import { createTask } from '../../actions/requests'
import { baseUrl } from '../../constants/axiosConstants'
import { daysOfTheWeek, hoursOfTheDay } from '../../constants/lists'
import DayCard from '../../components/DayCard/DayCard'
import { Header,TasksContainer } from './styled'

const TasksScreen = () => {
  const [tasks, updateTasks] = useGetTasks(`${ baseUrl }`, [])
  const { form, onChange, resetState } = useForm({
    task: "",
    weekday: "",
    hour: "",
  })

  const handleInputChange = event => {
    const { name, value } = event.target

    onChange(name,value)
  }

  const handleSubmission = event => {
    event.preventDefault()

    const body = {
      task: form.task,
      weekday: form.weekday,
      hour: Number(form.hour),
    }

    createTask(`${ baseUrl }`, body, resetState)
  }

  return (
    <div>
      <Header>
        <form onSubmit={ handleSubmission } >
          <label>
            Nova tarefa: {" "}
            <input 
              value={ form.task }
              name="task"
              onChange={ handleInputChange }
              type="text"
              required
            />
          </label>
          <select
            value={ form.weekday }
            name="weekday"
            onChange={ handleInputChange }
            title="Escolha um dia da semana"
            required
          >
            <option value=""></option>
            { daysOfTheWeek.map(day => {
              return (
                <option key={ day } value={ day }>{ day }</option>
              )
            }) }
          </select>
          <select
            value={ form.weekday }
            name="weekday"
            onChange={ handleInputChange }
            title="Escolha um horário"
            required
          >
            <option value=""></option>
            { hoursOfTheDay.map(hour => {
              return (
                <option key={ hour } value={ hour }>{ hour } h</option>
              )
            }) }
          </select>
          <button>Criar tarefa</button>
        </form>
        <button>Limpar tarefas</button>
      </Header>
      <TasksContainer>
        { daysOfTheWeek.map(day => {
          const tasksOfTheDay = tasks.filter(item => {
            return item.day === day
          })
          return (
            <DayCard day={ day } tasks={ tasksOfTheDay } />
          )
        }) }
      </TasksContainer>
    </div>
  );
}

export default TasksScreen;
