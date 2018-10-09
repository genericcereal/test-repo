import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Flexbox from 'flexbox-react';

import './_fadeUpSlow.scss';

const i = 0;
const Fade = posed.div({
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    delay: ({i}) => i,
    transition: {
      opacity: {
        ease: 'easeInOut',
        duration: 900
      },
      default: {
        ease: 'easeInOut',
        duration: 600
      }
    }
  }
});

class FadeUpSlow extends React.Component {

  state = {
    isVisible: true
  };
  componentDidMount() {

    this.setState({
      isVisible: !this.state.isVisible
    });

  }

  render() {

    const {isVisible} = this.state;
    return (<Fade class="box" pose={isVisible
        ? 'hidden'
        : 'visible'} i={this.props.delay}/>);
  }
}

export default FadeUpSlow
