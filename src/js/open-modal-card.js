const modal = document.getElementById('card-modal');
const closeModal = document.querySelector('.close');

// function to open the modal
const openModal = () => {
  modal.style.display = 'block';
};

// listen for click events
document.addEventListener('click', event => {
  const clickedElement = event.target;

  // check if the clicked element have the class 'movie-popular__item'
  const movieCard = clickedElement.closest('.movie-popular__item');
  if (movieCard) {
    openModal();
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
closeModal.style.cursor = 'pointer';
