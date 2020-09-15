export const goToHomePage = (history) => {
  history.push("/")
}

export const goToApplicationFormPage = (history) => {
  history.push("/application-form")
}

export const goToLoginPage = (history) => {
  history.push("/login")
}

export const goBack = (history) => {
  history.goBack()
}