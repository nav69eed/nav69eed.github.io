magnifier = document.querySelector('.search-icon')
search = document.querySelector('.search-input')
mic = document.querySelector('.mic')

magnifier.addEventListener('click', () => {
    search.classList.toggle('width0')
    mic.classList.toggle('width0')
    mic.classList.toggle('S-hidden')
    // console.log("helo")
});

// p = document.querySelector('p')
p = document.querySelectorAll('p')
search.addEventListener('input', () => {
    // console.log('hellloo')
    // console.log(input)
    input = search.value;
    p.forEach(pp => {
        if (input !== "") {
            regExp = new RegExp(input, 'gi');
            pp.innerHTML = pp.textContent.replace(regExp, "<mark>$&</mark>")
        }


        // input = search.value;
        // // console.log(input)
        // // console.log(p)
        // if (input !== "") {
        //     regExp = new RegExp(input, 'gi');
        //     p.innerHTML=p.textContent.replace(regExp,"<mark>$&</mark>")
        // }
    });
});