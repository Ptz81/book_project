import { Notify } from 'notiflix';

// опции Notify
Notify.init({
  position: 'right-top',
  timeout: 1500,
});

export function showError(v, opts) {
  const msg = v?.message || v;
  if (v instanceof Error) console.error(v);
  return Notify.failure(msg, opts);
}

export function showInfo(v, opts) {
  const msg = v?.message || v;
  return Notify.info(msg, opts);
}

export function showSuccess(v, opts) {
  const msg = v?.message || v;
  return Notify.success(msg, opts);
}

export function showWarn(v, opts) {
  const msg = v?.message || v;
  return Notify.warning(msg, opts);
}

export default {
  showError,
  showInfo,
  showSuccess,
  showWarn,
};
