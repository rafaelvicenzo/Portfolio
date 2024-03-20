"use strict";

document.querySelector('.logoTitle').addEventListener('click', function (event) {
    if (event.currentTarget === event.target) {
        window.location.href = 'index.html';
    }
});



