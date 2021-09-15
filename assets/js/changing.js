const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
    switch (index) {
        case 0:
            changeColor(button, 'pink')
            break;
        case 1:
            changeColor(button, 'red')
            break
        case 2:
            changeColor(button, 'blue')      
    
        default:
            break;
    }
});

function changeColor(button, color) {
    button.addEventListener('click', () => {
        document.querySelector('h1').style.color = color;
    })
}

console.log('buttons: ', buttons);