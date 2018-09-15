import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import {store} from './store/index.js';
import style from './main.scss';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('app'));
