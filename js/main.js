const loader = document.querySelector('.container__loader');
let menu = document.querySelector('.header__menu');
menu.style.display = 'none';

setTimeout(function () {
    loader.style.opacity = '0';
    setTimeout(() => {
        menu.style.display = 'block';
    }, 100);
    setTimeout(function () {
        loader.style.display = 'none';
        menu.show();
    }, 500);
}, 2000)