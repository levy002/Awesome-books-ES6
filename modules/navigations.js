import { booksSection } from './displayBooks.js';

const listTag = document.getElementById('list');
const newTag = document.getElementById('new');
const contactTag = document.getElementById('contact_section');

const deactivateActivity = (id) => {
  const menus = [listTag, newTag, contactTag];
  menus.map((m) => {
    if (m.id !== id) {
      m.classList.remove('active_menu');
    }
    return m;
  });
};

const showAndHide = (id) => {
  const formSection = document.getElementById('form_section');
  const contactSection = document.getElementById('contact');
  const sections = [booksSection, formSection, contactSection];
  sections.map((s) => {
    if (s.id === id) {
      if (s.id !== 'booksSection') {
        s.style.display = 'flex';
      } else {
        s.style.display = 'block';
      }
    } else {
      s.style.display = 'none';
    }
    return s;
  });
};

const updateView = (id) => {
  if (id === listTag.id) {
    if (!listTag.classList.contains('active_menu')) {
      listTag.classList.toggle('active_menu');
    }
    deactivateActivity(id);
    showAndHide('booksSection');
  } else if (id === newTag.id) {
    if (!newTag.classList.contains('active_menu')) {
      newTag.classList.toggle('active_menu');
    }
    deactivateActivity(id);
    showAndHide('form_section');
  } else if (id === contactTag.id) {
    if (!contactTag.classList.contains('active_menu')) {
      contactTag.classList.toggle('active_menu');
    }
    deactivateActivity(id);
    showAndHide('contact');
  }
};

export {
  updateView, listTag, newTag, contactTag,
};