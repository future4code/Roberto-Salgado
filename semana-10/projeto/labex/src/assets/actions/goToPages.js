export const goToHomePage = (history) => {
  history.push("/")
}

export const goToApplicationFormPage = (history) => {
  history.push("/application-form")
}

export const goToLoginPage = (history) => {
  history.push("/login")
}

export const goToCreateTripPage = (history) => {
  history.push("/trips/create")
}

export const goToListTripsPage = (history) => {
  history.push("/trips/list")
}

export const goToTripDetailsPage = (history) => {
  history.push("/trips/details")
}

export const goBack = (history) => {
  history.goBack()
}