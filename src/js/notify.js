import { Notify } from 'notiflix';

// опции Notify
Notify.init({
  position: 'right-top',
  timeout: 2500,
});

export function showError(v, opts) {
  const { message } = v || '';
  return Notify.failure(message || v, opts);
}

export function showInfo(v, opts) {
  const { message } = v || '';
  return Notify.info(message || v, opts);
}

export function showSuccess(v, opts) {
  const { message } = v || '';
  return Notify.success(message || v, opts);
}

export function showWarn(v, opts) {
  const { message } = v || '';
  return Notify.warning(message || v, opts);
}