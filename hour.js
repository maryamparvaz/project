let time = Number(prompt('time ra be daghighe vared konid'));
let saat = time / 60;

if (isNaN(time)) {
    alert('your data is wrong')
} else {
    alert('time shoma be saat barabar ast ba' +saat)
}