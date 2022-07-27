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


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}