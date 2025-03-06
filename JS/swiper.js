var slideSwiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
});

var saleSwiper = new Swiper(".sale-sec", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  observer: true,         // ✅ يراقب تغييرات DOM
  observeParents: true,   // ✅ يراقب تغييرات DOM للأب
  breakpoints: {
    1600: { slidesPerView: 5 },
    1000: { slidesPerView: 4 },
    700: { slidesPerView: 3 },
    500: { slidesPerView: 2 },
  }
});
window.addEventListener("resize", function () {
  saleSwiper.update();
});


var productSwiper = new Swiper(".product_swip", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  breakpoints:{
    1500:{
      slidesPerView : 4,
    },
    1200:{
      slidesPerView : 3,
    },
    900:{
      slidesPerView : 2,
    },
    500:{
      slidesPerView : 3,
    },
    50:{
      slidesPerView : 2,
    }
  }
});

// تحديث جميع السلايدرات بشكل فردي
slideSwiper.update();
saleSwiper.update();
productSwiper.update();
