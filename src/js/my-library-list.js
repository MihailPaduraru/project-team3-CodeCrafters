// const buttonMyLibrary = document.querySelector('.header__nav-link');
// const buttonWatched = document.querySelector('.add-to-watched-btn-modal');
// const buttonQueue = document.querySelector('.add-to-queue-btn-modal');

// buttonMyLibrary.addEventListener('click', myLibraryPage);

// buttonWatched.addEventListener('click', event => {
//   getLibraryFilms(event, 'watched');
//   buttonQueue.classList.remove('library-button-current');
//   buttonWatched.classList.add('library-button-current');
// });

// buttonQueue.addEventListener('click', event => {
//   getLibraryFilms(event, 'queue');
//   buttonWatched.classList.remove('library-button-current');
//   buttonQueue.classList.add('library-button-current');
// });

// export async function getLibraryFilms(
//   event = new Event('default'),
//   libraryPage = 'watched'
// ) {
//   const savedData = localStorage.getItem(libraryPage.toLowerCase());
//   const parsedData = JSON.parse(savedData);

//   movieGalleryElement.innerHTML = '';

//   const isGalleryEmpty = !parsedData || parsedData.length === 0;
//   emptyLibraryMessage.classList.toggle('visually-hidden', !isGalleryEmpty);

//   if (isGalleryEmpty) {
//     return;
//   }

//   spinner.show();

//   try {
//     const arrayOfMovies = await Promise.all(
//       parsedData.map(async id => getMovieDetails(id, ''))
//     );

//     renderResults(arrayOfMovies);
//   } catch (error) {
//     console.log(error.message);
//   }

// }

// function myLibraryPage(event) {
//   movieGalleryElement.innerHTML = '';
//   getLibraryFilms(event, 'watched');
//   buttonQueue.classList.remove('library-button-current');
//   buttonWatched.classList.add('library-button-current');
// }
