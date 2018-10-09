import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Flexbox from 'flexbox-react';

import './_press.scss';

const Press = posed.div({
  pressable: true,
  init: {
    scale: 1
  },
  press: {
    scale: 0.8
  }
});

class Pressed extends React.Component {

  render() {

    return (<Press className="pressed">
      {this.props.children}
    </Press>);
  }
}

export default Pressed
