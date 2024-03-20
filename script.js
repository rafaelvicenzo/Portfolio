"use strict";

document.querySelector('.logotitle').addEventListener('click', function (event) {
    if (event.currentTarget === event.target) {
        window.location.href = 'index.html';
    }
});


