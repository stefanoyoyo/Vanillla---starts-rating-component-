
import { getRatingComponent } from './rating-component/rating.js';

window.addEventListener('load', async function () {
  const appBody = document.getElementById('app-body');
  appBody.innerHTML = await getRatingComponent(); 
});