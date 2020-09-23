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

const likePost = (getByTestId) => {
  const likeButton = getByTestId("like-button")
  fireEvent.click(likeButton)
  return likeButton
}

const dislikePost = (getByTestId) => {
  const dislikeButton = getByTestId("like-button")
  fireEvent.click(dislikeButton)
  fireEvent.click(dislikeButton)
  return dislikeButton
}

const removePost = (getByText) => {
  const buttonRemovePost = getByText(/Apagar/i)
  fireEvent.click(buttonRemovePost)
}

describe ("Funcionalidade adicionar novo post", () => {
  test("Digitar no input", async () => {
    const { getByPlaceholderText } = render(<App />)

    const postText = typePost(getByPlaceholderText, "test")
    
    expect(postText).toEqual("test")
  })
 
  test("Clicar botão 'adicionar' adiciona a lista post", async () => {
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

describe ("Funcionalidade curtir/descurtir post", () => {
  test("Ao clicar curtir o botão muda o texto para descurtir", async () => {
    const {
      getByText,
      getByPlaceholderText,
      getByTestId,
    } = render(<App />)
    
    typePost(getByPlaceholderText, "test")

    addPost(getByText)

    const likeButton = likePost(getByTestId)

    expect(likeButton).toHaveTextContent(/Descurtir/i)
  })
  
  test("Ao clicar descurtir o botão muda o texto para curtir", async () => {
    const {
      getByText,
      getByPlaceholderText,
      getByTestId,
    } = render(<App />)
    
    typePost(getByPlaceholderText, "test")

    addPost(getByText)

    const dislikeButton = dislikePost(getByTestId)

    expect(dislikeButton).toHaveTextContent(/Curtir/i)
  })
})

describe ("Funcionalidade apagar post", () => {
  test("Ao clicar 'apagar' remove o post da lista", async () => {
    const {
      getByText,
      getByPlaceholderText,
      queryByText
    } = render(<App />)

    const postText = typePost(getByPlaceholderText, "test")

    addPost(getByText)

    removePost(getByText)

    const postsList = queryByText(postText)

    expect(postsList).toBeNull()
  })
})