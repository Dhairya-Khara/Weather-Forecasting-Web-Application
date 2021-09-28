import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { Provider } from 'react-redux'

import WeatherApp from './components/WeatherApp';
import configureStore from './configureStore'

const store = configureStore()

const jsx = (
  <div>
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  </div>
)

ReactDOM.render(jsx, document.getElementById('root'))