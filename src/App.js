import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './MyRedux/store'
import Router from './MyRouters/Root_router'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
