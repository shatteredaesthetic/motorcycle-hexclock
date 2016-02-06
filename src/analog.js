import { span, div } from '@motorcycle/dom';
import { aRowPipe, makeClock } from './utils';

const cellToggle = num => Number(num) ? {oncell: true, offcell: false} : {oncell: false, offcell: true};

const view = (char, i, a) => {
  let row = a.length - i;
  return div('.a-row', { key: `arow-${row - 1}` },
    aRowPipe(char).map((num, j, arr) => span(`.a-cell`, {
        key: `acell-${row * (arr.length - j)}`,
        class: cellToggle(num)
    }))
  );
};

export default makeClock(view);
