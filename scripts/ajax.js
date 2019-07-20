"use strict";

$(document).ready(function () {
  $("form").submit(function () {
    // Получение ID формы
    var formID = $(this).attr('id'); // Добавление решётки к имени ID

    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: 'mail.php',
      data: formNm.serialize(),
      success: function success(data) {
        // Вывод текста результата отправки
        $(formNm).html(data);
      },
      error: function error(jqXHR, text, _error) {
        // Вывод текста ошибки отправки
        $(formNm).html(_error);
      }
    });
    return false;
  });
});