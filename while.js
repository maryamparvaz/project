// یک عدد را از کاربر دریافت کرده سپس تعداد ان را نمایش دهید
//با while یک عدد از کاربر دریافت کرده و مجموع ارقام ان را نمایش دهید

let usernumber = Number(prompt('Enter your number'))
let sum = 0

while (Math.floor(usernumber / 10 != 0)) {
    sum = sum + Math.floor(usernumber % 10)
    usernumber = Math.floor(usernumber/10)
    
}
alert('The sum of the numbers is equal to' + '' + sum)
