/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
$(window).on("load", function () {

    $(".loader-wrapper").fadeOut(1000)
})

$(window).scroll(function () {
  var header = $("header");
  $(window).scrollTop() > 80
    ? header.addClass("scrolled")
    : header.removeClass("scrolled");
});

let timer;
$("form").keyup(function () {
  clearTimeout(timer);
  timer = setTimeout(() => {
    var emailValue = $("input[name=email]").val(),
      nameValue = $("input[name=name]").val(),
      messageValue = $("input[name=message]").val(),
      isEmailValid = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(emailValue),
      isFormValid = Boolean(
        isEmailValid && emailValue && nameValue && messageValue
      );

    $("form button").prop("disabled", !isFormValid);
  }, 400);
});
