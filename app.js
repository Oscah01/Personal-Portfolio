const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const home = document.querySelector('.homepage');

menuIcon.addEventListener('click', () => {
  if (!navbar.classList.contains('change')) {
    navbar.classList.add('change');
    home.style.filter = 'blur(8px)';
  } else {
    navbar.classList.remove('change');
    home.style.filter = 'blur(0)';
  }
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  if (!navbar.classList.contains('change')) {
    navbar.classList.add('change');
    home.style.filter = 'blur(8px)';
  } else {
    navbar.classList.remove('change');
    home.style.filter = 'blur(0)';
  }
}));
