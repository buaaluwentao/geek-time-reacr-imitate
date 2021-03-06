import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { render } from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import reducer from './c08/Reducer';
import Counter from './c08/Counter';
import fetchGets from './c08/fetchGets';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const render = () => ReactDOM.render(
  <Counter
    clickedTimes={store.getState().clickedTimes}
    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
     multipleBase={store.getState().multipleBase}
    onMultiple={() => store.dispatch({type: 'MULTIPLICATION'})}
    asyncGetRequest={() => store.dispatch(fetchGets('http://localhost:3000/test.txt'))}
    loading={store.getState().asyncGetRequest.loading}
  />,
  document.getElementById("root")
)
render();
store.subscribe(render);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
