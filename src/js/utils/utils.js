const toStr = Object.prototype.toString;

export const isDef = v => typeof v !== 'undefined';
export const isStr = v => typeof v === 'string';
export const isFunc = v => typeof v === 'function';
export const isInt = v => Number.isInteger(v);
export const isNum = v => !isNaN(v - parseFloat(v));
export const isObj = v => toStr.call(v) === '[object Object]';

export function cap(str) {
  return typeof str === 'string' && str
    ? str[0].toUpperCase() + str.slice(1)
    : '';
}

export function getZindex(e) {
  const z = getComputedStyle(e).getPropertyValue('z-index');
  return Number(isNaN(z) ? getZindex(e.parentNode) : z);
}

export function hasPageBeenReloaded(href = document.location.href) {
  const entries = Array.from(performance.getEntriesByType('navigation'));
  return entries.some(({ name, type }) => type === 'reload' && name === href);
}

export function getLocalStorageValue(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

export function clearLocalStorage({ except }) {
  if (!Array.isArray(except)) {
    except = String(except)
      .trim()
      .split(/\s*,\s*/);
  }
  Object.keys(localStorage).forEach(key => {
    if (!except.includes(key)) localStorage.removeItem(key);
  });
}

export function setProp(obj, path, value, splitter = '/') {
  if (typeof obj !== 'object') return;

  return String(path)
    .split(splitter)
    .reduce((ref, key, idx, arr) => {
      if (idx === arr.length - 1) ref[key] = value;
      return ref[key];
    }, obj);
}

export function getProp(obj, path, splitter = '/') {
  return String(path)
    .split(splitter)
    .reduce((ref, key) => ref[key], obj);
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
  setProp,
  getProp,
  hasPageBeenReloaded,
  getLocalStorageValue,
  clearLocalStorage,
};
