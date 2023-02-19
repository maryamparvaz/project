// اعدادی را ب تعداد دلخواه از کاربر دریافت کرده و میانگین ان را حساب کنید
let number = 0
let sum = 0
let counter=0
while (number != -1) {
    number = Number(prompt('enter the number or type -1'))
    sum = sum + number 
    counter++
    
    
}

alert((sum + 1)/(counter-1))
