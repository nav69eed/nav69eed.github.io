output = document.querySelector('.output')
buttons = document.querySelectorAll('button')
string = ''
arr = Array.from(buttons)
console.log(arr)
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        
        // console.log('helllooo')
        if (output.innerHTML == '0') {
            string="";
        }
        if (e.target.innerHTML == '=') {
            string = eval(string);
            output.innerHTML = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="0";
            output.innerHTML = string;
            
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            output.innerHTML = string;
            
        }
        else {
            string += e.target.innerHTML;
            output.innerHTML = string;
        }
    });
});