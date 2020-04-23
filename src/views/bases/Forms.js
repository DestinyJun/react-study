/**
 * desc：  Forms组件
 * author：DestinyJun
 * date：  2020/4/21 17:01
 */
import React, {Component} from 'react';

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '我是input',
      areaValue: '我是areaValue',
      selectValue: 'apple'
    };
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" name="user" onChange={this.handleChange.bind(this)} />
          <input type="text" name="password" onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          {/*这里注意下，要么使用defaultValue，要么value+change事件  */}
          <textarea value={this.state.areaValue} onChange={this.areaChange.bind(this)}/>
        </div>
        <div>
          {/*multiple开启是否可以多选*/}
          <select value={this.state.selectValue} onChange={this.selectChange.bind(this)}>
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="mango">橘子</option>
          </select>
        </div>
      </div>
    );
  }
  handleChange(e) {
    console.log(e.target.value);
  }
  areaChange(e) {
    this.setState({
      areaValue: e.target.value
    })
  }
  selectChange(event) {
    alert(`你喜欢的风味是：${this.state.selectValue}`);
    event.preventDefault();
  }
}
