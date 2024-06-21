export default function SwiperModule() {
  const swRelated = new Swiper(".related_list .swiper", {
    // Optional parameters
    speed: 700,
    spaceBetween: 8,
    autoplay: {
      delay: 4000,
    },
    // If we need pagination
    pagination: {
      el: ".related_list .swiper-pagination",
    },

    breakpoints: {
      375: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
  const swReview = new Swiper(".review_slider .swiper", {
    // Optional parameters
    speed: 700,
    spaceBetween: 8,
    autoplay: {
      delay: 4000,
    },
    // If we need pagination
    pagination: {
      el: ".review_slider .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
      },
    },
  });

  const proBox = document.querySelectorAll(".product-box");

  proBox.forEach((item) => {
    const sliderNav = item.querySelector(".slider-nav .swiper");
    const sliderMain = item.querySelector(".slider-main .swiper");
    const prev = item.querySelector(".swiper-button-prev");
    const next = item.querySelector(".swiper-button-next");

    const swProNav = new Swiper(sliderNav, {
      spaceBetween: 8,
      slidesPerView: 4,
      allowTouchMove: false,
      preventInteractionOnTransition: true,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swProMain = new Swiper(sliderMain, {
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      thumbs: {
        swiper: swProNav,
      },
    });
  });
  const proBoxSm = document.querySelectorAll(".product-box.sm");

  proBoxSm.forEach((item) => {
    const sliderNav = item.querySelector(".slider-nav .swiper");
    const sliderMain = item.querySelector(".slider-main .swiper");
    const prev = item.querySelector(".swiper-button-prev");
    const next = item.querySelector(".swiper-button-next");

    const swProNav = new Swiper(sliderNav, {
      spaceBetween: 8,
      slidesPerView: 3,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        321: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 5,
        },
      },
    });
    // const swProMain = new Swiper(sliderMain, {
    //   spaceBetween: 10,
    //   navigation: {
    //     nextEl: next,
    //     prevEl: prev,
    //   },
    //   thumbs: {
    //     swiper: swProNav,
    //   },
    // });
  });

  const swProDetailNav = new Swiper(
    ".product-detail_slider .slider-nav .swiper",
    {
      spaceBetween: 8,
      speed: 600,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    }
  );
  const swProDetailMain = new Swiper(
    ".product-detail_slider .slider-main .swiper",
    {
      spaceBetween: 0,
      speed: 600,
      autoplay: {
        delay: 4000,
      },
      thumbs: {
        swiper: swProDetailNav,
      },
    }
  );

  const swHero = new Swiper(".hero_slider .swiper", {
    // Optional parameters
    speed: 1000,
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
    },
    // If we need pagination
    pagination: {
      el: ".hero_slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero_slider .swiper-button-next",
      prevEl: ".hero_slider .swiper-button-prev",
    },
  });

  const swPromotion = new Swiper(".promotion_slider .swiper", {
    // Optional parameters
    speed: 700,
    spaceBetween: 8,
    autoplay: {
      delay: 4000,
    },
    // If we need pagination
    pagination: {
      el: ".promotion_slider .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
