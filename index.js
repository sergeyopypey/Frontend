// while(true){
//     let password = prompt('Введите пароль:', '')
//     if ( password == '3322') {
//         break
//     } else alert('Неверный пароль!')
// }
const LicenseTab = document.querySelector('#LicenseTab')
const UsersTab = document.querySelector('#UsersTab')

const ShowTip = document.querySelector('#lic_owner')
ShowTip.addEventListener("focusin", tipIn, false)
ShowTip.addEventListener("focusout", tipOut, false)

LicenseTab.addEventListener("click", showLicenseTab, false)
UsersTab.addEventListener("click", showUsersTab, false)

document.getElementById('Users').style.display = "none"

const sendLic = document.querySelector('#sendLicense')
const getLic = document.querySelector('#getLicenses')
const deleteLic = document.querySelector('#deleteLicense')

const sendUs = document.querySelector('#sendUser')
const getUs = document.querySelector('#getUsers')
const deleteUs = document.querySelector('#deleteUser')

sendLic.addEventListener("click", sendLicense, false)
getLic.addEventListener("click", getLicenses, false)
deleteLic.addEventListener("click", deleteLicense, false)

sendUs.addEventListener("click", sendUser, false)
getUs.addEventListener("click", getUsers, false)
deleteUs.addEventListener("click", deleteUser, false)


import { deleteLicense, getLicenses, sendLicense } from "./Controllers/licenseController"
import { showLicenseTab, showUsersTab, tipIn, tipOut } from "./animation"
import { sendUser, getUsers, deleteUser } from "./Controllers/userController"
import { optionsUpdate } from "./helper"

optionsUpdate()