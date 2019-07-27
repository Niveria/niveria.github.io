"use strict";

$(document).ready(function () {
  //Инициализация слайдера для slider2 
  $('.js-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    //autoplay: true,
    autoplaySpeed: 3000
  }); //всплывание текста и картинок

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
  }); //отложенная загрузка 

  $('.js-lazy').each(function (index, el) {
    var $image = $(el);
    var realSrc = $image.attr('data-src');
    $image.attr('src', realSrc);
  });
}); //ленивая заргузка

var images = document.querySelectorAll('.img-container'); //вот это посылается чтобы вызвать функцию обработки когда изобюражение попало на экран

var options = {
  rootMargin: '0px',
  threshold: 0.1
}; //замена изображения. Прследний пункт который я вставлял делая эту ленивую загрузку. копипаст. вроде бы читаешь код и понятно. и в тоже время непонятно...

var fetchImage = function fetchImage(url) {
  console.log(url);
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}; //загрузка, вызывает замену изображения


var loadImage = function loadImage(image) {
  var src = image.dataset.src;
  fetchImage(src).then(function () {
    // console.log(src)
    image.src = src;
  });
}; //это уэе само действие, вызывает загрузку


var handleIntersection = function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0) {
      console.log(entry.intersectionRatio);
      loadImage(entry.target);
    }
  });
}; //это вызов действия в зависимости от "опции"


var observer = new IntersectionObserver(handleIntersection, options); //вызов заеркпляется за всеми изображениеями... хотелось бы переделать, чтобы только к тем что мне нужны, надо разобраться....

images.forEach(function (img) {
  observer.observe(img);
});