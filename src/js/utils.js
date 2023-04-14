const isDef = v => typeof v !== 'undefined';
const isStr = v => typeof v === 'string';
const isFunc = v => typeof v === 'function';
const isInt = v => Number.isInteger(v);
const isNum = v => !isNaN(v - parseFloat(v));
const isObj = v => Object.prototype.toString.call(v) === '[object Object]';

function cap(str) {
  return typeof str === 'string' && str
    ? str[0].toUpperCase() + str.slice(1)
    : '';
}

const getRef = document.querySelector.bind(document);

export default {
  isInt,
  isStr,
  isFunc,
  isInt,
  isNum,
  isObj,
  getRef,
  cap,
};
