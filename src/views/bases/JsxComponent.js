/**
 * desc：  不使用JSX语法
 * author：DestinyJun
 * date：  2020/6/29 21:27
 */
import React from 'react';


// 不使用jsx语法
class Child1 extends React.Component{
  render() {
    return React.createElement('h1',null, `我是不使用jsx语法的`);
  }
}


// 使用jsx语法
export function JsxComponent(props) {
  return (
    <div>
      <p>JsxComponent</p>
      <Child1 />
    </div>
  );
}

