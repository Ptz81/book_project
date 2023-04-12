import { Notify } from 'notiflix';

const defNotifyOpts = {
  timeout: 2500,
};

// глобальные опции Notify
Notify.init({ position: 'right-bottom' });

export function showError(msg, opts) {
  return Notify.failure(msg, { ...defNotifyOpts, ...opts });
}

export function showInfo(msg, opts) {
  return Notify.info(msg, { ...defNotifyOpts, ...opts });
}

export function showSuccess(msg, opts) {
  return Notify.success(msg, { ...defNotifyOpts, ...opts });
}

export function showWarn(msg, opts) {
  return Notify.warning(msg, { ...defNotifyOpts, ...opts });
}
