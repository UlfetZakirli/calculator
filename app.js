let display = document.getElementById('display')
let change = document.querySelector('.change')
let buttons = Array.from(document.getElementsByClassName('button'))
buttons.map(button => {
    button.addEventListener('click', (e) => {
        calculate(e)

    })
})

function calculate(e) {
    if (display.innerText == '0') {
        display.innerText = ''
    }

    // change.innerText=value*(-1)
    switch (e.target.innerText) {
        case 'AC':
            display.innerText = '0'
            break;
        case 'DEL':
            if (display.innerText == '') {
                display.innerText = '0'
            }
            break;
      
        case '+/-':
            display.innerText = display.innerText * (-1)
            break;
        case '=':
            try {
                display.innerText = eval(display.innerText)
            } catch {
                display.innerText = 'Error'
            }
            break;
        default:
            display.innerText += e.target.innerText
            break;

    }
}