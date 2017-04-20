import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class User extends Component {
  render() {
    const { name, error } = this.props
    let template

    if (name) {
      template = <p>Hello {name}!</p>
    } else {
      template = <button className='btn' onClick={this.props.handleLogin}>Enter</button>
    }

    return (
      <div>
        {template}
        {error ? <p className='error'>{error}. <br />Please, try one more time.</p> : ''}
      </div>
    )
  }
}

User.PropTypes = {
  name: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}