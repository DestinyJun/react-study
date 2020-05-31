/**
 * desc：  深入理解JSX语法
 * author：DestinyJun
 * date：  2020/5/31 21:54
 */
import React from 'react';

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

// props.children(i)会自动识别传进来的是函数、字符串、还是组件
export function DeepJsx(props) {
  return (
    <div>
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    </div>
  );
}
