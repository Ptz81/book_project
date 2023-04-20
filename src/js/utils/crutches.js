export function disableElement(elem, disable = true) {
  if (!elem?.style) return;

  const STYLES_DISABLED = `
    user-select: none;
    pointer-events: none;
    opacity: 0.3;
    filter: grayscale(1);
  `;

  elem.disabled = !!disable;
  elem.style.cssText = !!disable ? STYLES_DISABLED : '';
}

export function fitModalByHeight(modal) {
  if (!modal?.style) return;

  const viewportHeight = document.documentElement.clientHeight;
  const { height } = modal.getBoundingClientRect();

  modal.style.cssText =
    height >= viewportHeight
      ? 'top: 10%; transform: translateX(-50%) scale(1);'
      : null;
}
