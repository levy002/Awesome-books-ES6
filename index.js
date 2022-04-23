import { initStorage, getAddedBook, form } from './src/modules/displayBooks.js';
import {
  updateView, listTag, newTag, contactTag,
} from './src/modules/navigations.js';
import displayDate from './src/modules/time.js';
import './src/styles.css';

initStorage();
form.addEventListener('submit', getAddedBook);
listTag.addEventListener('click', () => { updateView(listTag.id); });
newTag.addEventListener('click', () => { updateView(newTag.id); });
contactTag.addEventListener('click', () => { updateView(contactTag.id); });
setInterval(displayDate, 1000);