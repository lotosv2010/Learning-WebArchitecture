import React from 'react';
import { Button } from 'antd'

// 1
// Dialog作为容器不关心内容和逻辑
// 等同于vue中slot
function Dialog(props) {
  return (
    <div style={{ border: `4px solid ${props.color || "blue"}` }}>
      {props.children}
      <div className="footer">{props.footer}</div>
    </div>
  );
}

// WelcomeDialog通过复合提供内容
function WelcomeDialog(props) {
  return (
    <Dialog {...props}>
      <h1>欢迎光临</h1>
      <p>感谢使用react</p>
    </Dialog>
  );
}

//  2
const Api = {
  getUser() {
    return { name: "jerry", age: 20 };
  }
};

function Fetcher(props) {
  const user = Api[props.name]();
  return props.children(user);
}

// 3
function Filter({ children, type }) {
  return (
    <div>
      {React.Children.map(children, child => {
        if (child.type !== type) {
          return;
        }
        return child;
      })}
    </div>
  );
}


// 4
// 修改children
function RadioGroup(props) {
  return (
    <div>
      {React.Children.map(props.children, child => {
        //   vdom不可更改，克隆一个新的去改才行
        return React.cloneElement(child, { name: props.name });
      })}
    </div>
  );
}

function Radio({children, ...rest}) {
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  );
}

export default function() {
  const footer = <Button type="primary" onClick={() => alert("确定！")}>确定</Button>;

  return (
    <div>
      {/* 1 */}
      <WelcomeDialog color="green" footer={footer} />

      {/* 2 */}
      <Fetcher name="getUser">
        {({ name, age }) => (
          <p>
            {name}-{age}
          </p>
        )}
      </Fetcher>

      {/* 3 */}
      {/* 过滤器，可以过滤出指定标签类型 */}
      <Filter type="p">
        <h1>react</h1>
        <p>react很不错</p>
        <h1>vue</h1>
        <p>vue很不错</p>
      </Filter>
      
      {/* 4 */}
      <RadioGroup name="mvvm">
        <Radio value="vue">vue</Radio>
        <Radio value="react">react</Radio>
        <Radio value="react">angular</Radio>
      </RadioGroup>
    </div>
  );
}
