import { span } from '@motorcycle/dom';
import { makeClock } from './utils';

const view = (char, i, a) => span('.dcell', {key: `digi-${a.length - i + 1}`}, char);

export default makeClock(view);
