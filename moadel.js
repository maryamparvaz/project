// معدل کاربر را دریافت کرده و سپس سطح او را تعیین کنید

// A برای معدل 18 الی 20 سطح
// B برای معدل 15 الی 17 سطح
// C برای معدل 12 الی 14 سطح
// معدل کمتر از 12 مشروط میشه

let avrage = Number(prompt('moadel khod ra vared konid'));

switch (avrage) {
    case 18:
    case 19:
    case 20:
        alert('sath shoma A ast')
        break
    case 15:
    case 16:
    case 17:
        alert('sath shoma B ast')
        break
    case 12:
    case 13:
    case 14:
        alert('sath shoma C ast')
        break
    default:
        alert('shoma mashrotid')
}