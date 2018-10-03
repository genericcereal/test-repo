import React from 'react';

import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import  PrimaryButtonStandard from '../components/form-elements/buttons/primary/primary-button-standard';
import  UpcomingInterview from '../components/conglomerates/interview-progress/upcoming-interview/upcoming-interview';
import  FutureInterview from '../components/conglomerates/interview-progress/future-interview/future-interview';
import Flexbox from 'flexbox-react';
import '../public/styles/main.scss';

import { Button, Welcome } from '@storybook/react/demo';

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});


storiesOf('Group1|Button', module)


  .add('Secondary', () => <PrimaryButtonStandard /> );


storiesOf('Interviews', module)
  .add('Interviews', () =>

<Flexbox flexDirection="column" alignItems="center" display="flex">

  <section className=" mt-2">
<h2>Interviews</h2>
<Flexbox flexDirection="row" alignItems="center" display="flex">
  <UpcomingInterview />
</Flexbox>
  </section>

  <section className=" mt-2">
  <FutureInterview />
  </section>

  </Flexbox>


)
  .add('Future', () => <FutureInterview />);
