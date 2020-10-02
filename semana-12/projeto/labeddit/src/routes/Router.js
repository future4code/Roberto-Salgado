import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import PostsFeedPage from '../screens/PostsFeedPage/PostsFeedPage'
import PostDetailsPage from '../screens/PostDetailsPage/PostDetailsPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'

const Router = props => {
  return (
    <Switch>
      <Route exact path={'/login'}>
        <LoginPage setButtonName={props.setButtonName}/>
      </Route>
      <Route exact path={'/cadastro'}>
        <SignUpPage setButtonName={props.setButtonName}/>
      </Route>
      <Route exact path={['/posts', '/']}>
        <PostsFeedPage />
      </Route>
      <Route exact path={'/posts/:id'}>
        <PostDetailsPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  )
}

export default Router