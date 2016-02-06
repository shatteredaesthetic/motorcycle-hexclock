import { run } from '@motorcycle/core';
import { makeDOMDriver } from '@motorcycle/dom'
import Clock from './clock';

run(Clock, {
  DOM: makeDOMDriver('#app')
});
