import { initStorage, getAddedBook, form } from './modules/displayBooks.js';
import {
  updateView, listTag, newTag, contactTag,
} from './modules/navigations.js';
import displayDate from './modules/time.js';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mobileMenu from './modules/mobileMenu.js';

initStorage();
form.addEventListener('submit', getAddedBook);
listTag.addEventListener('click', () => { updateView(listTag.id); });
newTag.addEventListener('click', () => { updateView(newTag.id); });
contactTag.addEventListener('click', () => { updateView(contactTag.id); });
setInterval(displayDate, 1000);
mobileMenu();