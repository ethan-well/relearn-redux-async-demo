import React from 'react'
import { render } from 'react-dom'
import reducer from './reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/index'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./print.js', function(){
      console.log("Accepting the updated printMe module!");
      printMe();
  })
}