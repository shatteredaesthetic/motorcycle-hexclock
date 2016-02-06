import { compose, split, addIndex, map, curry } from 'ramda';

const toInt = curry((r, x) => parseInt(x, r));
const toStr = curry((r, x) => x.toString(r));
const pad = curry((size, num) => {
  while (num.length < size) num = `0${num}`;
  return num;
});
const toHexArr = compose( split(''), pad(4), toStr(16) );
const mapN = addIndex(map);

export const TICKRATE = Math.floor((24 * 60 * 60 * 1000) / 65536);
const getCurrTime = now => {
  let d = new Date(now),
      then = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        0, 0, 0),
      msecs = now - then.getTime();
  return Math.floor(msecs / TICKRATE);
};
const currTime = x => getCurrTime(x.time);
export const makeClock = fn => compose(mapN(fn), toHexArr, currTime);
export const aRowPipe = compose( split(''), pad(4), toStr(2), toInt(16) );
