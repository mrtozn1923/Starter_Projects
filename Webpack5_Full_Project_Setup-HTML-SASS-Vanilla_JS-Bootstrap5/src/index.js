import './scss/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import './js/app.js';
import Tooltip from 'bootstrap/js/src/tooltip';

/* Bootstrap bazı bileşenlerin javascript aktivitelerini kullanıcıya bırakmıştır. İlgili bileşenleri dahil sayfasından yapılması gerekenleri uygulayabilirsiniz.*/

window.addEventListener("load", function() {
    [...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
  .forEach(el => new Tooltip(el))
})