// while(true){
//     let password = prompt('Введите пароль:', '')
//     if ( password == '3322') {
//         break
//     } else alert('Неверный пароль!')
// }

const sendLic = document.querySelector('#sendLicense')
const getLic = document.querySelector('#getLicenses')
const deleteLic = document.querySelector('#deleteLicense')
const cleanTab = document.querySelector('#cleanTable')

sendLic.addEventListener("click", sendLicense, false)
getLic.addEventListener("click", getLicenses, false)
deleteLic.addEventListener("click", deleteLicense, false)
cleanTab.addEventListener("click", cleanTable, false)

import { deleteLicense, getLicenses, sendLicense } from "./licenseController"