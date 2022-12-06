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
  // add book
  dmMethods.addNewBook();

  window.addEventListener('storage', () => {
    dmMethods.loadBooks();
  });
  dmMethods.loadBooks();

  const addbk = document.querySelector('#add-bk');

  addbk.addEventListener('click', toList);
});
