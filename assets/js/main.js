(function ($) {
  "use strict";

  //set data-bg-image
  $("[data-background]").each(function () {
    var backgroundImage = $(this).attr("data-background");
    $(this).css("background-image", "url('" + backgroundImage + "')");
    $(this).removeAttr("data-background");
  });

  //set data-bg-color
  $("[data-bg-color]").each(function () {
    // Get the value of the data-bg-color attribute
    var backgroundColor = $(this).attr("data-bg-color");
    // Set the background color of the element
    $(this).css("background-color", backgroundColor);
    // Optionally, remove the data-bg-color attribute
    $(this).removeAttr("data-bg-color");
  });
  //set data-color
  $("[data-color]").each(function () {
    // Get the value of the data-color attribute
    var color = $(this).attr("data-color");
    // Set the  color of the element
    $(this).css("color", color);
    // Optionally, remove the data-color attribute
    $(this).removeAttr("data-color");
  });

  // brand swiper active
  // title swiper active clone
  var originalElement = $(".rs-brand-slider .swiper-slide");
  for (var i = 0; i < 2; i++) {
    originalElement.clone().appendTo(".rs-brand-slider .swiper-wrapper");
  }
  // activation
  var swiper = new Swiper(".rs-brand-slider ", {
    loop: true,
    speed: 3000,
    slidesPerView: 5,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 640px
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 1024px
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  // activation rs-testimonial-slider
  var swiper = new Swiper(".rs-testimonial-slider ", {
    loop: true,
    speed: 300,
    slidesPerView: 1,
    autoplay: true,
    navigation: {
      prevEl: ".rs-testimonial-arrow-left",
      nextEl: ".rs-testimonial-arrow-right",
    },
  });

  // mobile menu active
  $("#mobile-menu").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
  });
  // 03. Sidebar Js mobile menu active
  $(".rs-header-menu-icon").on("click", function () {
    $(".sidebar__area").toggleClass("sidebar-opened");
    $(".body-overlay").toggleClass("opened");
  });
  $(".sidebar__close-btn").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  $(".body-overlay").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });
})(jQuery);
