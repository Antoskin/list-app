import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import reducer from './reducer';
import {Provider} from 'react-redux';
// import store from './store';

const store = createStore(reducer);

const shows = store.getState();
console.log(shows)

window.store = store;

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
                     document.getElementById('root'));

