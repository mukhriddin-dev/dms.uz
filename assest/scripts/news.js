var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopedSlides: 50,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
