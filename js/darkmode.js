const darkmode = document.querySelector('#darkmode-toggle');

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});