export const isDef = v => typeof v !== 'undefined';
export const isStr = v => typeof v === 'string';
export const isFunc = v => typeof v === 'function';
export const isInt = v => Number.isInteger(v);
export const isNum = v => !isNaN(v - parseFloat(v));

export const isObj = v =>
  Object.prototype.toString.call(v) === '[object Object]';

export function cap(str) {
  return typeof str === 'string' && str
    ? str[0].toUpperCase() + str.slice(1)
    : '';
}

export function getZindex(e) {
  const z = getComputedStyle(e).getPropertyValue('z-index');
  return Number(isNaN(z) ? getZindex(e.parentNode) : z);
}

export const getRef = document.querySelector.bind(document);

export default {
  isInt,
  isStr,
  isFunc,
  isInt,
  isNum,
  isObj,
  getRef,
  getZindex,
  cap,
};
