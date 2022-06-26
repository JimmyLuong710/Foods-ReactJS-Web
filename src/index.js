import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {Provider } from 'react-redux'
import {createStore} from 'redux';
import rootReducer from "./store/reducers/rootReducer";
import Routers from './routes/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';


const reduxStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
     <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
