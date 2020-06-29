/**
 * desc：  不适用es6语法创建组件
 * author：DestinyJun
 * date：  2020/6/27 16:17
 */
import React from 'react';
import createReactClass from 'create-react-class'

export function CreateReactClass(props) {
  return (
    <div>
      <p>CreateReactClass</p>
      <Child1 />
      <Child2 />
    </div>
  );
}

// es6方式创建组件
class Child1 extends React.Component {
  // 初始化props
  static defaultProps = {
    name: '文君'
  };
  constructor(props) {
    super(props);
    this.state = {
      // 初始化state
      age: 18
    };
  }
  render() {
    return (
      <div>
        我是子组件1
        {this.props.name}
        <p>我的年龄是{this.state.age}</p>
      </div>
    );
  }
}

// react函数方式创建子组件
const Child2 = createReactClass({
  // 初始化props
  getDefaultProps: function() {
    return {
      name: 'Mary'
    };
  },
  // 初始化state
  getInitialState: function () {
    return {
      age: 20
    }
  },
 render: function () {
  return <div>
    <p>我是子组件2{this.props.name}</p>
    <p>我的年龄是：{this.state.age}</p>
  </div>
 }
});
