import './style.css';
import fetchData from './modules/displayItems.js';

fetchData();
const logo = require('../sources/logo.png');

const img = document.getElementById('img');
img.src = logo;
