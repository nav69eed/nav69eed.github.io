burger = document.querySelector('.burger')
menu = document.querySelector('.menu')
burger.addEventListener('click', () => {
    menu.classList.add('increase-width');
})

cross = document.querySelector('.icofont-brand-nexus')
cross.addEventListener('click', () => {
    menu.classList.remove('increase-width');
})

next = document.querySelector('.icofont-line-block-right')
previous = document.querySelector('.icofont-line-block-left')
header = document.querySelector('.header')

next.addEventListener('click', () => {
    header.classList.add('next');
})
previous.addEventListener('click', () => {
    header.classList.remove('next');
})

function show1() {
    t1 = document.querySelector('.t-1')
    t2 = document.querySelector('.t-2')
    t3 = document.querySelector('.t-3')

    t1.style.display = 'block';
    t2.style.display = 'none';
    t3.style.display = 'none';
}
function show2() {
    t1 = document.querySelector('.t-1')
    t2 = document.querySelector('.t-2')
    t3 = document.querySelector('.t-3')

    t1.style.display = 'none';
    t3.style.display = 'none';
    t2.style.display = 'block';
}
function show3() {
    t1 = document.querySelector('.t-1')
    t2 = document.querySelector('.t-2')
    t3 = document.querySelector('.t-3')
    t3.style.display = 'block';
    t2.style.display = 'none';
    t1.style.display = 'none';
}