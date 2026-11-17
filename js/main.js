const headerHeight = document.querySelector('header').getBoundingClientRect().height;
const btnTop = document.querySelector('.btn-top');
const nav = document.querySelector('.nav');
const menuBtns = document.querySelectorAll('.menu a');
const moblieBtn = document.querySelector('.mobile-btn');


btnTop.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

const toggleEvent = (isOpen) => {
    moblieBtn.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
    moblieBtn.setAttribute('aria-expanded', isOpen);
    nav.classList.toggle('active', isOpen);
}

moblieBtn.addEventListener('click', () => {
    const isOpen = moblieBtn.getAttribute('aria-expanded') === 'true';
    
    toggleEvent(!isOpen);
});

menuBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const id = btn.getAttribute('href');
        const target = document.querySelector(id);
        const top = target.getBoundingClientRect().top + scrollY;

        window.scrollTo({
            top: top - headerHeight,
            behavior: 'smooth'
        })

        toggleEvent(false);
        
    })    
});