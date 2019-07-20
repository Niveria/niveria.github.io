"use strict";

//Инициализация слайдера для slider2 
$(document).on('DOMContentLoaded', function () {
  $('.js-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    //autoplay: true,
    autoplaySpeed: 3000
  });
}); // всплывание текста и картинок

$(document).ready(function () {
  $('.inline-popups').magnificPopup({
    type: 'inline'
  });
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });
});