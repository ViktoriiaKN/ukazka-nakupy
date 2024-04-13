
import {addItem} from './shoplist.js'; // Потрібен тільки addItem, тому-що все інше імпортували в render.js
import { renderList } from './render.js';

const addBtn = document.querySelector('.btn-add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');
  const amountInput = document.querySelector('#input-amount');
  addItem(nameInput.value, amountInput.value);
  renderList();

  nameInput.value = '';
  amountInput.value = '';
});

renderList();
