import React, { Component } from 'react';
import '../App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/componentUser';
import Page from '../components/componentPage';
import * as pageActions from '../actions/PageActions.js';
import * as userActions from '../actions/UserActions'


class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    const {handleLogin} = this.props.userActions
    return (
      <div className="App">
        <User name={user.name} handleLogin={handleLogin} error={user.error} />
        <Page photos={page.photos} year={page.year}  getPhotos={getPhotos} fetching={page.fetching} />
      </div>
    );
  }
}

 function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

 function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
