import Books from './modules/books.js';
import addBooks from './modules/addBooks.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const bookList = document.querySelector('.list');
const addToList = document.querySelector('.addToList');
const contact = document.querySelector('.contact');
const btnList = document.querySelector('#list');
const btnAddNew = document.querySelector('#addNew');
const btnContact = document.querySelector('#contact');
const datetime = DateTime.now().toLocaleString({ ...DateTime.DATETIME_MED_WITH_SECONDS, hour12: 'long' });
const dateTimeContainer = document.querySelector('#date');
dateTimeContainer.innerHTML = datetime;
bookList.classList.add('show');

btnList.addEventListener('click', () => {
  bookList.classList.add('show');
  contact.classList.remove('show');
  addToList.classList.remove('show');
});
btnAddNew.addEventListener('click', () => {
  addToList.classList.add('show');
  bookList.classList.remove('show');
  contact.classList.remove('show');
});
btnContact.addEventListener('click', () => {
  contact.classList.add('show');
  bookList.classList.remove('show');
  addToList.classList.remove('show');
});

const addBtn = document.querySelector('.btnAdd');

const obj = new Books();
window.reload = obj.retrieveData();
addBtn.addEventListener('click', () => addBooks(obj));
window.removeFun = (item) => {
  obj.removeItem(item);
};
