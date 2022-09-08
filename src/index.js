import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux' 
import {createStore} from 'redux'
import usersReducer from './store/reducers/users-reducer';

const usersStore = createStore(usersReducer,{users:[{fName:"Yonatan",lName:"Itzhak",Age:25,Email:"Yonatan@gmail.com"}]})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={usersStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
