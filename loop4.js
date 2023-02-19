// دو عدد را از کاربر دربافت کرده و غدد اول را ب توان عدد دوم برسانید
let number1 = Number(prompt('enter the first number'))
let number2 = Number(prompt('enter the second number'))
let power = 1
for (i = 0; i < number2; i++){
    power = power * number1
    
}alert(power)