window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
      header.classList.add('shrink');
  } else {
      header.classList.remove('shrink');
  }
});