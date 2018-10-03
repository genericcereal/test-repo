import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';


import './_disabled-card.scss';


class DisabledCard extends React.Component {

 render() {

   return (
     <div className={'br-1 border-1-grey2 p-1m dc ' + this.props.className}>
      {this.props.children}
     </div>

      )
    }

}
export default DisabledCard
