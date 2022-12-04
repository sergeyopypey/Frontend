// while(true){
//     let password = prompt('Введите пароль:', '')
//     if ( password == '3322') {
//         break
//     } else alert('Неверный пароль!')
// }
const LicenseTab = document.querySelector('#LicenseTab')
const UsersTab = document.querySelector('#UsersTab')
LicenseTab.addEventListener("click", showLicenseTab, false)
UsersTab.addEventListener("click", showUsersTab, false)

document.getElementById('Users').style.display = "none"

const sendLic = document.querySelector('#sendLicense')
const getLic = document.querySelector('#getLicenses')
const deleteLic = document.querySelector('#deleteLicense')

sendLic.addEventListener("click", sendLicense, false)
getLic.addEventListener("click", getLicenses, false)
deleteLic.addEventListener("click", deleteLicense, false)

import { deleteLicense, getLicenses, sendLicense } from "./licenseController"
import { showLicenseTab, showUsersTab } from "./tabs"