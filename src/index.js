import './style.css';
import render from './modules/render.js';
import addScore from './modules/saveScore.js';

const addButton = document.getElementById('submit-button');

addButton.addEventListener('click', async (event) => {
  event.preventDefault();
  await addScore();
});

//render();
