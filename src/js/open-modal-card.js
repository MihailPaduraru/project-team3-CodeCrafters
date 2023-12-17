import { BASE_URL, KEY } from './url';

const modal = document.getElementById('card-modal');

// function to open the modal and populate with movie information
const openModal = async movieCard => {
  // Extract movie information from the clicked card
  const movieTitle = movieCard.querySelector('.movie-popular__title').innerText;
  const movieGenre = movieCard.querySelector('.movie-popular__genre').innerText;
  const movieImg = movieCard
    .querySelector('.movie-popular__img')
    .getAttribute('src');
  const votes = movieCard.querySelector('.movie-popular__rating').innerText;
  const movieId = movieCard.dataset.id;
  const additionalInfo = await fetchAdditionalInfo(movieId);
  const genreNames = additionalInfo.genres.map(genre => genre.name);
  const popularity = additionalInfo.popularity;
  const voteCount = additionalInfo.vote_count;
  // Update modal content with movie information and additional details
  modal.innerHTML = `
  <span class="close-card-modal"> &times;</span>
    <div class="modal-card-content">
        <img class="modal-card-img" loading="lazy" src="${movieImg}" alt="${movieTitle}">
        <div class="modal-info-content">
        <h2 class="movie-title-modal"><strong>${movieTitle}</strong></h2>
        <p class="movie-info">Vote / Votes:  <strong> <span class="votes-style" class="movie-details" > ${votes} </span> / <span class="voteCount-style"> ${voteCount}</span></strong></p>
        <p class="movie-info"> Popularity:  <span class="movie-details"> <strong> ${popularity} </strong> </span> </p>
        <p class="movie-info"> Original title: <span class="movie-details"><strong>${movieTitle} </strong></span></p>
        <p class="movie-info">Genre: <span class="movie-details"><strong>${genreNames.join(
          ', '
        )}</strong><span></p>
        <p class="movie-info-about">About: <span class="movie-info-about-text"><strong>${
          additionalInfo.overview
        }</strong> </span></p>
        </div>
   </div>
   <div class="modal-buttons">
   <button class="add-to-watched-btn-modal">add to Watched</button>
   <button class="add-to-queue-btn-modal">add to queue</button>
 </div>
 
  
  `;

  modal.style.display = 'block';
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
  }

  //  check if the clicked element is the close button
  if (clickedElement.classList.contains('close-card-modal')) {
    modal.style.display = 'none';
    modal.style.cursor = 'pointer';
  }
});
