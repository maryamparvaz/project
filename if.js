// یک سامانه ثبت نام پیاده سازی کنید

// به این شکل که یک آرایه برای ذخیره اطلاعات کاربران داشته باشید (3 کاربر را بطور دیفالت در آرایه داشته باشید)
// و از کاربری که قصد ثبت نام دارد نام، نام خانوادگی، سن و ایمیل را دریافت کرده
// و داخل آبجکتی مجزا در آرایه کاربران ذخیره کنید
// پس از انجام عمل ثبت نام، اطلالاعات تک تک کاربران را لاگ بگیرید

// :نکات قابل توجه
// نام حداقل باید 3 کاراکتر و حداکثر 10 کاراکتر داشته باشد
// نام خانوادگی حداقل باید 3 کاراکتر و حداکثر باید 15 کاراکتر داشته باشد
// سن حتما باید عدد بوده و حداکثر 3 رقم باشد

let users = ['amir', 'mahdi', 'pooya']

let firstname = prompt('enter your first name');
let lastname = prompt('enter your last name');
let age = prompt('enter your age');
let email = prompt('enter your email');
let Register = { 'firstname': firstname, 'lastname': lastname, 'age': age, 'email': email };
users.push(Register);

if (firstname.length < 3 || 10 < firstname) {
    alert('please check your name')
} else if (lastname < 3 || lastname > 15) {
    alert('please check your last name')
} else if (isNaN(age) || age > 3) {
    alert('please check your age')
    
}
console.log(users)