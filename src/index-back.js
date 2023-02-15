import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './7.react-redux/index';
import { Provider } from 'react-redux';
import { store, persistor } from './7.react-redux/store'; // 持久化8
import { PersistGate } from 'redux-persist/integration/react'   // 持久化9
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
            <App />
        </PersistGate>
    </Provider>
);
