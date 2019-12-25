import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CompType, { CompTypeFunc } from './components/01/CompType'
import Clock from './components/01/Clock'
import Cart from './components/01/Cart'
import Goods from './components/01/Goods'
import CommentList from './components/02/CommentList'
import PureComponent  from './components/02/PureComponent'
import Memo  from './components/02/Memo'
import Hoc  from './components/02/Hoc'
import HocChaining  from './components/02/HocChaining'
import HocDecorators  from './components/02/HocDecorators'
import Composition  from './components/02/Composition'
import Hook  from './components/03/Hook'
import Context  from './components/03/Context'
import KForm  from './components/03/KForm'


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
        <a href="https://www.jianshu.com/p/b331d0e4b398" className="App-link">生命周期</a>

        <hr style={{width: '100%'}} />
        <h4>6.容器组件</h4>
        <CommentList />

        <hr style={{width: '100%'}} />
        <h4>7.PureComponent组件</h4>
        <PureComponent />

        <hr style={{width: '100%'}} />
        <h4>8.Memo组件</h4>
        <Memo />

        <hr style={{width: '100%'}} />
        <h4>9.高阶组件-函数组件</h4>
        <Hoc />

        <hr style={{width: '100%'}} />
        <h4>10.高阶组件-链式调用</h4>
        <HocChaining />

        <hr style={{width: '100%'}} />
        <h4>11.高阶组件-链式调用装饰器写法</h4>
        <HocDecorators />

        <hr style={{width: '100%'}} />
        <h4>12.组件复合</h4>
        <Composition />

        <hr style={{width: '100%'}} />
        <h4>13.Hook</h4>
        <Hook />

        <hr style={{width: '100%'}} />
        <h4>14.组件跨层级通信 - Context</h4>
        <Context />

        <hr style={{width: '100%'}} />
        <h4>15.组件设计与实现</h4>
        <KForm />
        <br />
      </header>
    </div>
  );
}

export default App;
