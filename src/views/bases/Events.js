/**
 * desc：  事件处理
 * author：DestinyJun
 * date：  2020/4/21 17:01
 */
import React, {Component} from 'react';

export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '文君'
    };
  }

  render() {
    return (
      <div>
        <button className='btn btn-outline-info' onClick={this.btnClick.bind(this, this.state.name)}>点击我</button>
      </div>
    );
  }
  btnClick(name,event) {
    console.log(event);
  }
}
