const commentsPopup = () => {
  const displayPopup = document.querySelectorAll('[data-modal-target]');
  displayPopup.forEach((button) => {
    button.addEventListener('click', () => {
      const displaySection = document.querySelector(button.dataset.modalTarget);
      document.body.classList.add('no-scroll');
      displaySection.classList.add('display-section');
      if (!displaySection.open) {
        displaySection.showModal();
      }
    });
  });
  const closeButton = document.querySelectorAll('[data-close-button]');
  closeButton.forEach((btnC) => {
    btnC.addEventListener('click', () => {
      const popup = btnC.closest('.display-section');
      const dialogContainer = document.querySelector('.display-section');
      popup.close();
      dialogContainer.classList.remove('display-section');
      document.body.classList.remove('no-scroll');
    });
  });
};
export default commentsPopup;