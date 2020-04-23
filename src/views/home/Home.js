/**
 * desc：  Home
 * author：DestinyJun
 * date：  2020/4/21 14:42
 */
import React from 'react';
import './Home.css';

export function Home(props) {
  return (
    <div>
      {props.children}
      <p>Home</p>
    </div>
  );
}
