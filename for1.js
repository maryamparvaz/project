// یک عدد را از کاربر دریافت کرده و سپس مجموع ارقام ان را محاسبه کرده

let number = prompt('enter your number')
let sum = 0
for (i = 0; Math.floor(number) != 0; i++){
    sum = sum + (Math.floor(number % 10))
    number = Math.floor(number/10)
    
}
alert(sum)