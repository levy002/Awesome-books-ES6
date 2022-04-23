import { initStorage, getAddedBook, form } from './modules/displayBooks.js';
import {
  updateView, listTag, newTag, contactTag,
} from './modules/navigations.js';
import displayDate from './modules/time.js';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mobileMenu from './modules/mobileMenu.js';

initStorage();
form.addEventListener('submit', () => {
  getAddedBook();
  updateView(listTag.id);
});
listTag.addEventListener('click', () => { updateView(listTag.id); });
newTag.addEventListener('click', () => { updateView(newTag.id); });
contactTag.addEventListener('click', () => { updateView(contactTag.id); });
document.getElementById('logo').addEventListener('click', () => { updateView(listTag.id); });
setInterval(displayDate, 1000);
mobileMenu();