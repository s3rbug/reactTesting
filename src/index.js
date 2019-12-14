import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/reduxStore'
import App from './App'
import StoreContext from './StoreContext'

const rerenderEverything = (state) => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>, document.getElementById('root'))
}

rerenderEverything(store.getState())

store.subscribe(() => {
  rerenderEverything(store.getState())
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
