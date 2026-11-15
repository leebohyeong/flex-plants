const btnTop = document.querySelector('.btn-top');

btnTop.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})