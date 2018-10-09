import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Flexbox from 'flexbox-react';

import './_storybook-wrapper.scss';

class StoryBookWrapper extends React.Component {

  render() {

    return (<Flexbox flexDirection="column" alignItems="center" display="flex">
      <Flexbox flexDirection="column" className="flex-container">
        <Flexbox flexDirection="row" className="mt-2">
          <h2>{this.props.h2}</h2>
        </Flexbox>
        <Flexbox flexDirection="row" className="mb-4">
          <p>{this.props.text}</p>
        </Flexbox>

        <Flexbox flexDirection="column" className="p-2 item-container br-1">
          <Flexbox flexDirection="row" width="100%">
            <h5 className="mb-1">Example</h5>
          </Flexbox>
          {this.props.children}
        </Flexbox>

      </Flexbox>
    </Flexbox>)
  }

}
export default StoryBookWrapper
