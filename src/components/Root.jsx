import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import FormMaker from './FormMaker/FormMaker'
import FormPicker from './FormPicker/FormPicker'
import FormPreview from './FormPreview/FormPreview'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/:filter?" component={App} />
      <Route exact path="/forms" component={FormPicker} />
      <Route exact path="/forms/:id" component={FormPreview} />
      <Route exact path="/create/form" component={FormMaker} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root