"use strict";

function scrollToSection() {
    const sectionElement = document.querySelector('#profilePicture');
    if (sectionElement) {
        const offset = -100;
        const elementPosition = sectionElement.offsetTop + offset;
        window.scrollTo({ top: elementPosition, behavior: 'auto' });
    }
}

