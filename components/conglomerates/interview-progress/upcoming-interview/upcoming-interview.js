import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import StandardCard from '../../../form-elements/cards/standard/standard-card';
import PrimaryButtonStandard from '../../../form-elements/buttons/primary/primary-button-standard';
import Bullet from '../bullet/bullet';
import Flexbox from 'flexbox-react';

import './_upcoming-interview.scss';

class UpcomingInterview extends React.Component {

  render() {
    return (<Flexbox flexDirection="row" alignItems="center" width="100%" className={this.props.layout}>
      <Bullet className="upcoming shadow-3"></Bullet>
      <StandardCard className="interview shadow-3">
        <Flexbox flexDirection="row" display="flex" alignItems="center" justifyContent="space-between">
          <Flexbox flexDirection="column">
            <div className="con">
              <h4>This is a thing</h4>
              <div className="desc">
                <p>Vestibulum et convallis metus, eu auctor odio. Orci varius natoque penatibus et magnis dis
                </p>
              </div>
            </div>
          </Flexbox>
          <Flexbox flexDirection="column" alignSelf="flex-start">
            <div className="cta">
              <PrimaryButtonStandard/>
            </div>
          </Flexbox>
        </Flexbox>
      </StandardCard>
    </Flexbox>)
  }

}
export default UpcomingInterview
