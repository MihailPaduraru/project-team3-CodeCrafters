import { BASE_URL, KEY } from './url';

const modal = document.getElementById('card-modal');

let movieForRendering;

const watchedArray = [];
const queueArray = [];

const savedDataWatched = localStorage.getItem('watched');
const parsedDataWatched = JSON.parse(savedDataWatched);
if (parsedDataWatched) {
  for (const array of parsedDataWatched) {
    watchedArray.push(array);
  }
}

const savedDataQueue = localStorage.getItem('queue');
const parsedDataQueue = JSON.parse(savedDataQueue);
if (parsedDataQueue) {
  for (const array of parsedDataQueue) {
    queueArray.push(array);
  }
}
const modalBackdrop = document.querySelector('.modal-backdrop');
const body = document.body;

const openModal = async movieCard => {
  const movieTitle = movieCard.querySelector('.movie-popular__title').innerText;
  const movieImg = movieCard
    .querySelector('.movie-popular__img')
    .getAttribute('src');
  const votes = movieCard.querySelector('.movie-popular__rating').innerText;
  const movieId = movieCard.dataset.id;
  const additionalInfo = await fetchAdditionalInfo(movieId);
  const genreNames = additionalInfo.genres.map(genre => genre.name);
  const popularity = additionalInfo.popularity;
  const voteCount = additionalInfo.vote_count;

  // update modal content with movie information and additional details
  modal.innerHTML = `
    <span class="close-card-modal"> &times;</span>
    <div class="modal-card-container">
      <div class="modal-img-container">
        <img class="modal-card-img" loading="lazy" src="${movieImg}" alt="${movieTitle}">
      </div>
      <div class="modal-info-content">
        <h2 class="movie-title-modal">${movieTitle}</h2>
        <div class="movie-info-container">
          <ul>
            <li class="movie-info">
              Vote / Votes:
              <span class="votes-style" class="movie-details"> ${votes} </span> /
              <span class="voteCount-style"> ${voteCount}</span>
            </li>
            <li class="movie-info">
              Popularity:
              <span class="movie-details">${popularity}</span>
            </li>
            <li class="movie-info">
              Original title:
              <span class="movie-details">${movieTitle} </span>
            </li>
            <li class="movie-info">
              Genre:
              <span class="movie-details">${genreNames.join(', ')}</span>
            </li>
          </ul>
        </div>
        <span class="movie-info-about">About:</span>
        <p><span class="movie-info-about-text">${
          additionalInfo.overview
        }</span></p>
        <div class="modal-buttons">
          <button class="add-to-watched-btn-modal">add to Watched</button>
          <button class="add-to-queue-btn-modal">add to queue</button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'block';
  body.style.overflow = 'hidden'; // prevent scrolling on the background
};

const closeModal = () => {
  modalBackdrop.style.display = 'none';
  modal.style.display = 'none';
  body.style.overflow = ''; // allow scrolling on the background
};

export const fetchAdditionalInfo = async movieId => {
  try {
    const response = await fetch(`${BASE_URL}movie/${movieId}?api_key=${KEY}`);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok (${response.status} ${response.statusText})`
      );
    }

    const data = await response.json();
    console.log('Additional Info:', data);
    return data;
  } catch (error) {
    console.error('Error fetching additional info:', error);
    return null;
  }
};

document.addEventListener('click', event => {
  const clickedElement = event.target;

  // check if the clicked element has the class 'movie-popular__item'
  const movieCard = clickedElement.closest('.movie-popular__item');
  if (movieCard) {
    event.preventDefault();
    openModal(movieCard);
    modalBackdrop.style.display = 'block';
  }

  //  check if the clicked element is the close button
  if (clickedElement.classList.contains('close-card-modal')) {
    closeModal();
  }
});

// close the modal when the 'Esc' key is pressed
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
