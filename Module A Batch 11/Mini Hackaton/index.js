$(document).ready(function () {
  $(".sliderBox").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow:$('.preArrow'),
    nextArrow:$('.nextArrow'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $(".testimonial_box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow:$('.testimonial .preArrow'),
    nextArrow:$('.testimonial .nextArrow'),
  });
});
addEventListener("DOMContentLoaded", (event) => {
  closeBtn.addEventListener("click", () => {
    mobile_menu.classList.remove("Active");
    closeOverlay.classList.remove("Active");
  });
  closeOverlay.addEventListener("click", () => {
    mobile_menu.classList.remove("Active");
    closeOverlay.classList.remove("Active");
  });
  humbugger.addEventListener("click", () => {
    mobile_menu.classList.add("Active");
    closeOverlay.classList.add("Active");
  });
});