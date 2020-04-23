/**
 * desc：  状态提升：在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。
 * author：DestinyJun
 * date：  2020/4/21 17:01
 */
import React, {Component} from 'react';
const scaleNames = {
  c: '摄氏温度',
  f: '华氏温度'
};
// 转为摄氏度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
// 转为华氏温度
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
// 受字符串类型的 temperature 和转换函数作为参数并返回一个字符串
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerDict(props) {
  if (props.celsius >= 100) {
    return <p>水已经开了</p>
  } else {
    return <p>水还没开</p>
  }
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    };
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange.bind(this)} />
        <span>{temperature}</span>
      </fieldset>
    );
  }
  handleChange(e) {
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }
}

export class StatePromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale={'c'}
          temperature={celsius}
          onTemperatureChange={this.handleFahrenheitChange.bind(this)}/>
        <TemperatureInput
          scale={'f'}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange.bind(this)} />
        <BoilingVerDict celsius={parseFloat(celsius)} />
      </div>
    );
  }
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
}
