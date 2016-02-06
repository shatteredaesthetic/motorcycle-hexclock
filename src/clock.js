import most from 'most';
import { div } from '@motorcycle/dom';
import { TICKRATE } from './utils';
import digital from './digital';
import analog from './analog';

export default () => ({
  DOM: most.periodic(TICKRATE).timestamp().map(time => div('.clock-container', [
    div('.digital', digital(time)),
    div('.analog', analog(time))
  ]))
});
