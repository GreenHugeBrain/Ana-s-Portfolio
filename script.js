document.addEventListener('DOMContentLoaded', function () {
  var headerContainer = document.querySelector('.header-container');
  var upButton = document.querySelector('.up-button');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      headerContainer.classList.add('scrolled');
      upButton.classList.add('show-up-button');
    } else {
      headerContainer.classList.remove('scrolled');
      upButton.classList.remove('show-up-button');
    }
  });

  upButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    upButton.classList.remove('show-up-button');
  });

  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
      }
    });
  });
});
