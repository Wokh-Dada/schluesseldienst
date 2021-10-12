const mobileNavIcon = document.querySelector('.mobile-nav-icon');

const accordion = document.querySelector('.help-container-list__collapse-btn');

mobileNavIcon.addEventListener('click', mobileShowMobileNav)

// accordion.addEventListener('click', accordionIcon)

function mobileShowMobileNav() {
    const mobileNav = document.querySelector('#mobile-nav');
    const mobileIcon = document.querySelector('.mobile-nav-icon');

    mobileIcon.classList.toggle("change");
    mobileNav.classList.toggle("mobile-nav-show");
}

function accordionIcon(block){
    block.classList.toggle('accordion-open')
}
