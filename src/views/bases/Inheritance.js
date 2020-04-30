/**
 * desc：  组合继承
 * author：DestinyJun
 * date：  2020/4/21 17:01
 */
import React from 'react';

function Child1(props) {
  return (
    <div>
      <p>我是孩子</p>
      <p dangerouslySetInnerHTML={{ __html: [props.left,props.right]}}>
      </p>
    </div>
  );
}

export function Inheritance() {
  return (
    <div>
      <p>Inheritance</p>
      <Child1 left={`<span>我是左边</span>`} right={`<span>我是右边</span>`}>
        <span>我是孙子</span>
      </Child1>
    </div>
  );
}
