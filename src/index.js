import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';
import {Provider} from 'react-redux'
import store from './store' 
ReactDOM.render(
    <Provider  store={store}>
    <React.StrictMode>
      <IndexPage />
    </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
);
