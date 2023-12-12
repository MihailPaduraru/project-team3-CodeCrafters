
const observer = new IntersectionObserver(observerTriger);

const scrollBtn = document.querySelector('.scroll-btn'); 
const scrollObservable = document.querySelector('.header'); 

observer.observe(scrollObservable); 
scrollBtn.addEventListener('click', onTopButton); 


function onTopButton() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function observerTriger(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollBtn.classList.add('visually-hidden');
    } else {
      scrollBtn.classList.remove('visually-hidden');
    }
  });
}
