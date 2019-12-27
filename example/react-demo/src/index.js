import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import store from './store/redux'

ReactDOM.render(<App />, document.getElementById('root'));

// redux
// 可以手动订阅更新，也可以事件绑定到视图层
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById('root'));
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
