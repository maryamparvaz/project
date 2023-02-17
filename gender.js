// از کاربر سن و جنسیت را دریافت کنید.
// در صورتی که جنسیت کاربر مونث بوده یا سن کمتر از 18 را دارد، به اون خطا نمایش داده
// و در غیر این صورت به اون مجوز ورود به پنل را نمایش دهید.

let sen = Number(prompt('sen khod ra vared konid'))
let gensiat = prompt('gensiat khod ra vared konid(boy or girl')

if (gensiat === 'girl' || sen < 18) {
    alert('shoma mogaz be vorod nistid')
} else {
    alert('vared shavid')
}