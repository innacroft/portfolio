var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var offset = 70;


$('a[href*="#"]:not([href="#"])').click(function() {

  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $('html, body').animate({
              scrollTop: target.offset().top-100
          }, 1000);
          return false;
      }
  }
});

