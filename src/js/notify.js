import { Notify } from 'notiflix';

// опции Notify
Notify.init({
  position: 'right-top',
  timeout: 250,
});

export function showError(msg, opts) {
  return Notify.failure(msg, opts);
}

export function showInfo(msg, opts) {
  return Notify.info(msg, opts);
}

export function showSuccess(msg, opts) {
  return Notify.success(msg, opts);
}

export function showWarn(msg, opts) {
  return Notify.warning(msg, opts);
}
