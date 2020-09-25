import React from 'react'
import { render, screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { baseUrl } from './assets/constants/axiosConstants'
import App from './App'

axios.get = jest.fn().mockResolvedValue({
  data: []
})
axios.post = jest.fn().mockResolvedValue({})
axios.put = jest.fn().mockResolvedValue()
axios.delete = jest.fn().mockResolvedValue()

describe("Planner", () => {
  const createTask = async (taskText, taskDay, taskHour) => {
    const inputText = screen.getByPlaceholderText("...")
    await userEvent.type(inputText, taskText)
    expect(inputText).toHaveValue(taskText)

    const selectDay = screen.getByTitle("Dia da semana")
    const optionDay = screen.getByTestId(taskDay)
    userEvent.selectOptions(selectDay, optionDay.value)
    expect(selectDay).toHaveValue(taskDay)
    
    const selectHour = screen.getByTitle("Horário")
    const optionHour = screen.getByTestId(`hora-${ taskHour }`)
    userEvent.selectOptions(selectHour, optionHour.value)
    expect(selectHour).toHaveValue(String(taskHour))

    const buttonCreateTask = screen.getByText(/Criar tarefa/i)
    userEvent.click(buttonCreateTask)
  }

  const createTaskAndRender = async (text, day, hour) => {
    const utils = render(<App />)
    await wait(() => createTask(text, day, hour))
    return utils
  }

  test("Initial render triggers request and renders tasks", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          hour: 9,
          day: "Sábado",
          task: "tarefa teste 1",
          done: false,
          id: "123"
        },
        {
          hour: 13,
          day: "Domingo",
          task: "tarefa teste 2",
          done: false,
          id: "456"
        },
        {
          hour: 18,
          day: "Sexta-Feira",
          task: "Sextou!",
          done: false,
          id: "789"
        }
      ]
    })

    const { findAllByTestId } = render(<App />)

    const tasks = await findAllByTestId("task-content")

    expect(axios.get).toHaveBeenCalled()
    expect(tasks).toHaveLength(3)
    await wait()
  })

  test("Create task", async () => {
    axios.post = jest.fn().mockResolvedValue()
    axios.get = jest.fn().mockResolvedValue({ data: [] })
    await createTaskAndRender("Sextou!", "Sexta-Feira", 13)

    expect(axios.post).toHaveBeenCalledWith(`${ baseUrl }`,
      {
        hour: 13,
        day: "Sexta-Feira",
        task: "Sextou!",
        done: false
      }
    )

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })

  test("mark task as done", async() => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          hour: 9,
          day: "Sábado",
          task: "tarefa teste 1",
          done: false,
          id: "123"
        }
      ]
    })
    axios.put = jest.fn().mockResolvedValue()

    render(<App />)

    const task = await screen.findByText(/tarefa teste 1/i)

    userEvent.click(task)

    expect(axios.puts).toHaveBeenCalledWith(`${ baseUrl }/123`, {
      done: true
    })

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })

  test("Delete task", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          hour: 9,
          day: "Sábado",
          task: "tarefa teste 1",
          done: false,
          id: "123"
        }
      ]
    })
    axios.delete = jest.fn().mockResolvedValue()

    render(<App />)

    const task = await screen.findByText(/tarefa teste 1/i)

    userEvent.dblClick(task)

    expect(axios.delete).toHaveBeenCalledWith(`${ baseUrl }/123`)

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2)
    })
  })
})