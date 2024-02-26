const headerHeight = document.querySelector('header').offsetHeight;
const section = document.querySelector('.hero');
section.style.marginTop = `calc(100vh - ${headerHeight}px)`;
section.style.marginTop = `${headerHeight}px`;
