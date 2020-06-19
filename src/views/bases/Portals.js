/**
 * desc：  Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
 * 具体就是给孩子dom增加一个父亲dom
 * author：DestinyJun
 * date：  2020/6/15 11:15
 */
import React, {Component} from 'react';
import ReactDOM from  'react-dom';

export function Portals(props) {
  return (
    <div>
      <PortalsChild>
        <div className='modal1'>
          With a portal, we can render content into a different
          part of the DOM, as if it were any other React child.
        </div>
      </PortalsChild>
    </div>
  );
}

class PortalsChild extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.el = document.createElement('div')
  }
  render() {
    // this.el.className = 'waring';
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}
