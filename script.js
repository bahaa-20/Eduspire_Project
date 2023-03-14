const arrowUp = document.querySelector('.arrowUpBox');
const darkModeSwitcher = document.querySelectorAll('.darkMode span');
const menuButton = document.querySelector('.menuIcon');
const mobileLinks = document.querySelector('.mobileLinks');

arrowUp.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

darkModeSwitcher.forEach((switcher) => {
    switcher.addEventListener('click', () => {
        document.body.classList.toggle('activeDarkMode');
    });
});

menuButton.addEventListener('click', () => {
    mobileLinks.classList.toggle('mobileNavActive');
});