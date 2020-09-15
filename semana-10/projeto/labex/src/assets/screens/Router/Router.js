import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../LoginPage/LoginPage'
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import ListTripsPage from '../ListTripsPage/ListTripsPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
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
        <Route  exact path="/">
          <HomePage />
        </Route>
        <Route>
          <div>404: Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router