export const goToLogin = (history) => {
  history.push('/login')
}

export const goToSignUp = (history) => {
  history.push('/cadastro')
}

export const goToPostsFeed = (history) => {
  history.push('/posts')
}

export const goToPostDetails = (history, id) => {
  history.push(`posts/${ id }`)
}