// ماشین حساب

let number1 = Number(prompt('add aval ra vared konid'))
let number2 = Number(prompt('add dovom ra vared konid'))
let amaliat = prompt('che amaliati angam shavad(- , + , * , /)')

if (amaliat == '-') {
    if (number1 > number2) {
        alert(number1 - number2)
    } else {
        alert(number2-number1)
    }
    
} else if (amaliat == '+') {
    alert(number2+number1)
} else if (amaliat == '*') {
    alert(number1*number2)
} else if (amaliat == '/') {
    if (number1 > number2) {
        alert(number1 / number2)
    } else {
        alert(number2/number1)
    }
    
} else {
    alert('dade ra eshtebah vared kardin')
}