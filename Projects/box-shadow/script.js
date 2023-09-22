box = document.querySelector('.box')
ranges = document.querySelectorAll('input[type="range"]')
ccolors = document.querySelectorAll('input[type="color"]')
Output = document.querySelector('.output')
btn = document.querySelector('.btn-primary')

ranges.forEach(range => {
    range.addEventListener('input', createBox)
});
ccolors.forEach(colors => {
    colors.addEventListener('input', createBox)
});
btn.addEventListener('click', () => {
    Output.select();
    document.execCommand('copy');
    alert('Code Copied')
});
function createBox() {

    let X = ranges[0].value;
    let Y = ranges[1].value;
    let blur = ranges[2].value;
    let spread = ranges[3].value;
    let bradius = ranges[4].value;
    let cval = ccolors[0].value;
    // console.log(X)
    // console.log(Y)
    // console.log(blur)
    // console.log(spread)
    // console.log(cval)
    box.style.cssText = `border-radius: ${bradius}px;box-shadow: ${X}px ${Y}px ${blur}px ${spread}px ${cval};`
    Output.value = `box-shadow: ${X}px ${Y}px ${blur}px ${spread}px ${cval}; border-radius: ${bradius}px;`
}