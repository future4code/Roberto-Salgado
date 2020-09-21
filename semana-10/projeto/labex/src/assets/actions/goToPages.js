export const goToHomePage = (history) => {
  history.push("/")
}

export const goToApplicationFormPage = (history) => {
  history.push("/application-form")
}

export const goToLoginPage = (history) => {
  history.push("/login")
}

export const goToSignupPage = (history) => {
  history.push("/signup")
}

export const goToCreateTripPage = (history) => {
  history.push("/trips/create")
}

export const goToListTripsPage = (history) => {
  history.push("/trips/list")
}

export const goToTripDetailsPage = (history, tripId) => {
  history.push(`/trips/details/${ tripId }`)
}

export const goBack = (history) => {
  history.goBack()
}