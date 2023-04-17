
const openModalFooter = document.querySelector('[data-footer-modal-open]');
const closeModalFooter = document.querySelector('[data-footer-modal-close]');
const modalFooter = document.querySelector('[data-footer-modal]');

openModalFooter .addEventListener('click', toggleModal);



openModalFooter.addEventListener('click', toggleModal);
closeModalFooter.addEventListener('click', toggleModal);

function toggleModal() {
  modalFooter.classList.toggle('is-hidden');
}
