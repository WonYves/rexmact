import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './7.react-redux/index';
import { Provider } from 'react-redux';
import store from './7.react-redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
 