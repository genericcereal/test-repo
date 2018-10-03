import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import DisabledCard from '../../../form-elements/cards/disabled/disabled-card';
import PrimaryButtonStandard from '../../../form-elements/buttons/primary/primary-button-standard';
import Bullet from '../bullet/bullet';
import Flexbox from 'flexbox-react';

import './_future-interview.scss';







class FutureInterview extends React.Component {

 render() {
   return (
       <Flexbox flexDirection="row"  alignItems="center">
        <Bullet className="future"></Bullet>
       <DisabledCard className="interview disabled">
       <Flexbox flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
       <Flexbox flexDirection="column">
       <div className="con">
          <h4>This is a thing</h4>
          <div className="desc">
            <p>Vestibulum et convallis metus, eu auctor odio. Orci varius natoque penatibus et magnis dis </p>
          </div>
       </div>
       </Flexbox>
       </Flexbox>


       </DisabledCard>
       </Flexbox>


      )
    }

}
export default FutureInterview
