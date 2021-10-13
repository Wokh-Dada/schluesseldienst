const mobileNavIcon = document.querySelector('.mobile-nav-icon');

mobileNavIcon.addEventListener('click', mobileShowMobileNav)

function mobileShowMobileNav() {
    const mobileNav = document.querySelector('#mobile-nav');
    const mobileIcon = document.querySelector('.mobile-nav-icon');

    mobileIcon.classList.toggle("change");
    mobileNav.classList.toggle("mobile-nav-show");
}
