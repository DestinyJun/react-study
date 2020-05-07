/**
 * desc：  与第三方库协同
 * author：DestinyJun
 * date：  2020/5/6 11:25
 */
import React from 'react';
import $ from 'jquery';

class Chosen extends React.Component {
  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
  componentDidMount() {
    this.$el = $(this.el);
    // this.$el.chosen();
  }
}

function Example() {
  return (
    // <p>123</p>
    <Chosen onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}

export function ThirdParty(props) {
  return (
    <div>
      <p>ThirdParty</p>
      <Example />
    </div>
  );
}
