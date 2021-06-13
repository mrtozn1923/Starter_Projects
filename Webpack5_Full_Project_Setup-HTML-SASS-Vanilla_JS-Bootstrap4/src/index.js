import './scss/main.scss';
const $=require('jquery/dist/jquery');
import 'bootstrap/dist/js/bootstrap.bundle';
import './js/app.js';

window.addEventListener("load",function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
