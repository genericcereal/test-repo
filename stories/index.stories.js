import React from 'react';

import {storiesOf} from '@storybook/react';

import PrimaryButtonStandard from '../components/form-elements/buttons/primary/primary-button-standard';
import UpcomingInterview from '../components/conglomerates/interview-progress/upcoming-interview/upcoming-interview';
import FutureInterview from '../components/conglomerates/interview-progress/future-interview/future-interview';
import FadeInUp from '../components/animations/fadein/fadein';
import FadeUpSlow from '../components/animations/fadeupslow/fadeupslow';
import Pressed from '../components/animations/press/press';
import StoryBookWrapper from './storybook/storybook-wrapper';
import Flexbox from 'flexbox-react';
import '../public/styles/main.scss';

import {Button, Welcome} from '@storybook/react/demo';

storiesOf('Form Elements|Button', module).add('Secondary', () => <PrimaryButtonStandard/>);

storiesOf('Animations|Animations', module).add('Secondary', () => <StoryBookWrapper h2="Upcoming Interview" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut metus laoreet, euismod ante aliquam, interdum tortor. Vivamus pulvinar egestas elit id accumsan. Sed et felis velit.">
  <FadeInUp/>
</StoryBookWrapper>).add('Pressed', () => <StoryBookWrapper h2="Upcoming Interview" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut metus laoreet, euismod ante aliquam, interdum tortor. Vivamus pulvinar egestas elit id accumsan. Sed et felis velit.">
  <Pressed/>
</StoryBookWrapper>).add('Fade Slow', () => <StoryBookWrapper h2="Upcoming Interview" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut metus laoreet, euismod ante aliquam, interdum tortor. Vivamus pulvinar egestas elit id accumsan. Sed et felis velit.">
  <FadeUpSlow delay="500"/>
</StoryBookWrapper>);

storiesOf('Conglomerates|Interviews', module).add('Upcoming', () => <StoryBookWrapper h2="Upcoming Interview" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut metus laoreet, euismod ante aliquam, interdum tortor. Vivamus pulvinar egestas elit id accumsan. Sed et felis velit.">
  <UpcomingInterview layout="mt-2 mb-2"/>

</StoryBookWrapper>).add('Future', () => <StoryBookWrapper h2="Future Interview" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut metus laoreet, euismod ante aliquam, interdum tortor. Vivamus pulvinar egestas elit id accumsan. Sed et felis velit.">
  <FutureInterview layout="mt-2 mb-2"/>

</StoryBookWrapper>);
