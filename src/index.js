import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/reduxStore'
import App from './App'

const rerenderEverything = (state) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
      store={store}
    />, document.getElementById('root'))
}

rerenderEverything(store.getState())

store.subscribe(() => {
  rerenderEverything(store.getState())
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
