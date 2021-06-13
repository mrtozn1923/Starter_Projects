/* Bootstrap JS*/
import './js/bootstrap.js';
import Tooltip from './js/tooltip.js';
/* Bootstrap SCSS */
import './scss/bootstrap.scss';

/* Tooltip varsayılan olarak aktif değildir. Bunun için aşağıdaki kod yazılmalıdır.*/
/* Javascript ile alakalı işlemler için ilgili bileşenin referansına erişmelisiniz. Yukarıdaki örnekte olduğu gibi Tooltip referansına erişip işlem gerçekleştirdik.*/
window.addEventListener("load",function(){
    [...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
    .forEach(el => new Tooltip(el))
});