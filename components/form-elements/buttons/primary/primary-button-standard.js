import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Pressed from '../../../animations/press/press'

import './_primary-button-standard.scss';

class PrimaryButtonStandard extends React.Component {

  render() {
    return (<div className={'btn-container'}>
      <Pressed>
        <button className={'btn-standard br-3 shadow-1 ' + this.props.className}>

          <div className="btn-text middle-align float-left font-std">Get Started</div>
          <div className="arrow-circle middle-align float-right">
            <span className="typcn typcn-arrow-right icon-med next-icon"></span>
          </div>

        </button>
      </Pressed>
    </div>)
  }

}
export default PrimaryButtonStandard
