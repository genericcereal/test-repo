import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';


import './_bullet.scss';


class Bullet extends React.Component {

 render() {

   return (
     <div className="bullet">
     <div className={'br-100 outer ' + this.props.className}>
      <div className="br-100 inner"></div>
     </div>
     </div>

      )
    }

}
export default Bullet
