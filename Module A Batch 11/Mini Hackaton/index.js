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
