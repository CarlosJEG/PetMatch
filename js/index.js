const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 10,

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 4,
    },
  },
});

AOS.init();
