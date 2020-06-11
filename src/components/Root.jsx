import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import FormMaker from './FormMaker/FormMaker'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/:filter?" component={App} />
      <Route exact path="/forms/create" component={FormMaker} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root