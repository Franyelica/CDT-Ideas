import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CDTIDeasApp } from './CDTIDeasApp';
// import './styles.css'


import { Provider } from 'react-redux'
import store from './store'

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
};




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options} >
        <CDTIDeasApp />
        </AlertProvider>
      </BrowserRouter>
  </Provider>
)
