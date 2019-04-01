/*Error*/
$(function() {
  jQuery(function($) {
    $('#code').on('keypress', function() {
      var that = this;
      setTimeout(function() {
        var res = /[^а-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
      }, 0);
    });
  });
})

$(function() {
  jQuery(function($) {
    $('#code2').on('keypress', function() {
      var that = this;
      setTimeout(function() {
        var res = /[^а-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
      }, 0);
    });
  });
})





/* Phone mask*/
$(document).ready(function() {
        $("#phone").mask("+7 (999) 999-99-99");
      });
$(document).ready(function() {
        $("#phone2").mask("+7 (999) 999-99-99");
      });


