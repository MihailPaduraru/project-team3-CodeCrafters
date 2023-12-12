

export function initializeSlider() {
  $('.slider').slick({
    arrows: false,
    // centerPadding: '40px',
    centerMode: true,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 8,
    infinite: true,
    speed: 1000,
    adaptiveHeigt: true,
    cssEase: 'ease',
  });
}

export function resetSlider() {
  $('.slider').slick('unslick');
}
