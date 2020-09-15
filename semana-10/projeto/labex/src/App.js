import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './assets/screens/HomePage/HomePage'
import ApplicationFormPage from './assets/screens/ApplicationFormPage/ApplicationFormPage'
import LoginPage from './assets/screens/LoginPage/LoginPage'
import CreateTripPage from './assets/screens/CreateTripPage/CreateTripPage'
import ListTripsPage from './assets/screens/ListTripsPage/ListTripsPage'
import TripDetailsPage from './assets/screens/TripDetailsPage/TripDetailsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="/">
          <HomePage />
        </Route>
        <Route  exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route  exact path="/login">
          <LoginPage />
        </Route>
        <Route  exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route  exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route  exact path="/trips/details">
          <TripDetailsPage />
        </Route>
        <Route>
          <div>404: Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
