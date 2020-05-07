/**
 * desc：  Fragments案例
 * author：DestinyJun
 * date：  2020/5/6 11:03
 */
import React from 'react';

function ChildA() {
  return <span>ChildA</span>
}

function ChildB() {
  return <span>ChildB</span>
}

function ChildC() {
  return <span>ChildC</span>
}
export function Fragments(props) {
  return (
    <div>
      <p>Fragments</p>
      <React.Fragment>
        <ChildA />
        <ChildB />
        <ChildC />
      </React.Fragment>
    </div>
  );
}
