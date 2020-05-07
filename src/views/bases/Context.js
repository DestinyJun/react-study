/**
 * desc：  context的使用
 * author：DestinyJun
 * date：  2020/5/3 13:14
 */
import React from 'react';
import {Button} from "react-bootstrap";
const ThemeConText = React.createContext('dark');
function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeConText;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Button variant={this.context}>按钮</Button>;
  }
}

export function Context(props) {
  return (
    <ThemeConText.Provider value="primary">
      <div>
        <p>context</p>
        <Toolbar  />
      </div>
    </ThemeConText.Provider>
  );
}
