import { toggleView, toList } from './modules/navigation.js';
import DomMethods from './modules/dynamic.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

window.addEventListener('DOMContentLoaded', () => {
  const dmMethods = new DomMethods();
  document.getElementById('date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('list-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#new-link span').style.color = 'inherit';
    document.querySelector('#contact-link span').style.color = 'inherit';
    toggleView(0);
  });
  document.getElementById('new-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#list-link span').style.color = 'inherit';
    document.querySelector('#contact-link span').style.color = 'inherit';
    toggleView(1);
  });
  document.getElementById('contact-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#list-link span').style.setProperty('color', 'inherit');
    document.querySelector('#new-link span').style.setProperty('color', 'inherit');
    toggleView(2);
  });
  document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = dmMethods.books.length;
    const book = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (book && author) {
      dmMethods.books.push({ id, book, author });
      document.getElementById('error').textContent = '';
      localStorage.setItem('books', JSON.stringify(dmMethods.books));
      window.dispatchEvent(new Event('storage'));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    } else {
      document.getElementById('error').textContent = 'Provide all details';
      document.getElementById('error').style.setProperty('color', 'red');
    }
  });
  window.addEventListener('storage', () => {
    dmMethods.loadBooks();
  });
  dmMethods.loadBooks();

  const addbk = document.querySelector('#add-bk');

  addbk.addEventListener('click', toList);
});
