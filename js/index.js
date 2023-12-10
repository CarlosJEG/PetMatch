const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 10,

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

AOS.init();
