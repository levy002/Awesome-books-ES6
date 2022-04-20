const menuIcon = document.getElementById('menu-icon');
const navLinksContainer = document.querySelector('#nav_bar ul');
const navLinks = document.querySelectorAll('#nav_bar ul li');
const links = Array.from(navLinks);
const closeMenuIcon = document.getElementById('close-menu');
const bookSection = document.getElementById('booksSection');
const form = document.querySelector('form');

const displayMenu = () => {
  navLinksContainer.className = 'd-flex d-md-none flex-column bg-primary list-unstyled position-absolute end-0 p-5 gap-4 vh-100 w-100 top-0';
  links.forEach((l) => {
    if (l.id === 'close-menu-container') {
      l.className = 'fs-3 align-self-end mb-4';
    } else {
      l.className = 'fs-3 align-self-center';
    }
  });
  bookSection.classList.add('d-none');
  form.classList.add('d-none');
};

const closeMenu = () => {
  navLinksContainer.className = 'me-5 list-unstyled d-md-flex gap-5 d-none justify-content-center m-0';
  bookSection.classList.remove('d-none');
  form.classList.remove('d-none');
};

const mobileMenu = () => {
  menuIcon.addEventListener('click', displayMenu);
  closeMenuIcon.addEventListener('click', closeMenu);
  links.forEach((l) => l.addEventListener('click', closeMenu));
};

export default mobileMenu;
