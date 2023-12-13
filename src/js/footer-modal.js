const modal = document.querySelector('.backdrop-team');
const openButton = document.querySelector('[data-team-open]');
const closeButton = document.querySelector('[data-team-close]');

const openModal = () => {
  modal.classList.add('modal-open');
};

// Function to close the modal
const closeModal = () => {
  modal.classList.remove('modal-open');
};

// Event listener for opening the modal
openButton.addEventListener('click', openModal);

// Event listener for closing the modal
closeButton.addEventListener('click', closeModal);
