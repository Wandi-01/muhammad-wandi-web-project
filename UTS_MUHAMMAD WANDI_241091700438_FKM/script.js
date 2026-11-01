/* script.js — menu mobile & pesan sukses form registrasi.
   Website tetap berfungsi tanpa file ini. */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var toggle = document.querySelector('.nav-toggle');
    var links = document.getElementById('nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', function () {
            var open = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });
    }

    var form = document.getElementById('form-registrasi');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var ok = document.getElementById('form-success');
            if (ok) { ok.classList.add('show'); ok.scrollIntoView({ block: 'center' }); }
            form.reset();
        });
    }
});
