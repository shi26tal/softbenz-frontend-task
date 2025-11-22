// const swiper = new Swiper(".courseSwiper", {
//   slidesPerView: 1,          // mobile
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   breakpoints: {
//     640: { slidesPerView: 1 },   // small screens
//     768: { slidesPerView: 2 },   // tablets
//     1024: { slidesPerView: 3 },  // laptops
//     1280: { slidesPerView: 4 }   // desktops (your design)
//   }
// });

const swiper = new Swiper(".courseSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 }
  }
});
