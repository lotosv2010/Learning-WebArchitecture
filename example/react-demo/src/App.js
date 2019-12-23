import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompType, { CompTypeFunc } from './components/01/CompType'
import Clock from './components/01/Clock'
import Cart from './components/01/Cart'
import Goods from './components/01/Goods'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 组件 */}
        <hr style={{width: '100%'}} />
        <h4>1.组件</h4>
        <CompTypeFunc name="Component Type Function" />
        <CompType name="Component Type Class" />

        <hr style={{width: '100%'}} />
        <h4>2.state</h4>
        <Clock />

        <hr style={{width: '100%'}} />
        <h4>3.条件/循环/事件监听</h4>
        <Goods title="标题:条件&循环" />

        <hr style={{width: '100%'}} />
        <h4>4.组件通信</h4>
        <Cart title="商品列表" />

        <hr style={{width: '100%'}} />
        <h4>5.生命周期</h4>
        {/* https://www.jianshu.com/p/b331d0e4b398 */}
        <a href="https://www.jianshu.com/p/b331d0e4b398">生命周期</a>
        <br />
        <hr style={{width: '100%'}} />
      </header>
    </div>
  );
}

export default App;
