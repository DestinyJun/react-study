/**
 * desc：  Refs转发/（到底有什么用？）
 * author：DestinyJun
 * date：  2020/5/6 9:59
 */
import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} onClick={() => {console.log(ref);}} className="FancyButton" >
    {props.children}
  </button>
));

/*function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return LogProps;
}*/

export function Refs(props) {
  const ref = React.createRef();
  return (
    <div>
      <p>Refs</p>
      <FancyButton ref={ref} onClick={() => {console.log(1111);}}>Click me!</FancyButton>
    </div>
  );
}
