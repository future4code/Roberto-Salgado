import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from "./App"

const typePost = (getByPlaceholderText, post) => {
  const inputPost = getByPlaceholderText(/Novo post/i)
  fireEvent.change(inputPost, { target: { value: post } })
  return inputPost.value
}

const addPost = (getByText) => {
 const buttonAddPost = getByText(/Adicionar/i)
 fireEvent.click(buttonAddPost) 
}

describe ("Funcionalidade adicionar novo post", () => {
  
  test("Digitar no input", async () => {
    const { getByPlaceholderText } = render(<App />)

    const postText = typePost(getByPlaceholderText, "test")
    
    expect(postText).toEqual("test")
  })
 
  test("Clicar botão 'adicionar post'", async () => {
    const {
      getByText,
      getByPlaceholderText,
      queryAllByText
    } = render(<App />)

    const postText = typePost(getByPlaceholderText, "test")

    addPost(getByText)

    const postsList = queryAllByText(postText)

    expect(postsList.length > 0).toBe(true)
  })
})