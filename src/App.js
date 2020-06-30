import React from 'react'
import PropTypes from 'prop-types'
import Plants from './Plants.jsx'

const App = ({ title }) => <div>{title}<Plants /></div>

App.propTypes = {
  title: PropTypes.string.isRequired,
}

export default App
