$(document).ready(function () {
  $('.loading-screen').fadeIn();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadContent();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.getElementById('scroll-trigger'));

  function loadContent() {
    setTimeout(function () {
      $('.loading-screen').fadeOut();
      $('.blur-container').addClass('loaded');
      $('body').css('overflow', 'auto');
    }, 2000);
  }

  const headerContainer = $('.header-container');
  const upButton = $('.up-button');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) {
      headerContainer.addClass("scrolled");
      upButton.addClass("show-up-button");
    } else {
      headerContainer.removeClass("scrolled");
      upButton.removeClass("show-up-button");
    }
  });

  upButton.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    upButton.removeClass("show-up-button");
  });
});


$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    var target = $($(this).attr('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});