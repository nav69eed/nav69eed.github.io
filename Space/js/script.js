a1 = document.querySelector('.c-1')
a2 = document.querySelector('.c-2')
a3 = document.querySelector('.c-3')
a4 = document.querySelector('.c-4')

b1 = document.querySelector('.pop-1')
b2 = document.querySelector('.pop-2')
b3 = document.querySelector('.pop-3')
b4 = document.querySelector('.pop-4')

a1.addEventListener('mouseover', () => {
    b1.classList.add('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})
a1.addEventListener('mouseout', () => {
    b1.classList.remove('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})
a2.addEventListener('mouseover', () => {
    b2.classList.add('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})
a2.addEventListener('mouseout', () => {
    b2.classList.remove('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})
a3.addEventListener('mouseover', () => {
    b3.classList.add('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})
a3.addEventListener('mouseout', () => {
    b3.classList.remove('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})
a4.addEventListener('mouseover', () => {
    b4.classList.add('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})
a4.addEventListener('mouseout', () => {
    b4.classList.remove('popup');
    // console.log('hiiiiiiiiiiiiiiii');
})