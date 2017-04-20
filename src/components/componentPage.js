import React, { Component} from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.textContent)
  }
  render() {
    const { year, photos, fetching } = this.props

    return (
      <div>
        <div>
          <button onClick={this.onYearBtnClick.bind(this)}>2017</button>
          <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
          <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
          </div>
        <h3>{year}</h3>
        {
          fetching ?
            <p>Loading...</p>
            :
            <p>You have { photos.length } photos for { year } year</p>
        }
      </div>
    )
  }
}

Page.PropTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}