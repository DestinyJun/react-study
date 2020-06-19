/**
 * desc：  Profiler 测量渲染一个 React 应用多久渲染一次以及渲染一次的“代价”。 它的目的是识别出应用中渲染较慢的部分，
 * 或是可以使用类似 memoization 优化的部分，并从相关优化中获益。
 * author：DestinyJun
 * date：  2020/6/15 15:35
 */
import React from 'react';

export function Profiler(props) {
  return (
    <div>
      <p>Profiler</p>
    </div>
  );
}
