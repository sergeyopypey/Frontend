// while(true){
//     let password = prompt('Введите пароль:', '')
//     if ( password == '3322') {
//         break
//     } else alert('Неверный пароль!')
// }

// Уведомления на будущее
// Notification.requestPermission().then(function (permission) {
//     console.log(permission);
// });
// var title = "JavaScript Jeep";
// var icon = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
// var body = "It's Your boarding time";
// var notification = new Notification(title, { body, icon });
// const LicenseTab = document.querySelector('#LicenseTab')
// const UsersTab = document.querySelector('#UsersTab')

getLicenses()
const ShowTip = document.querySelector('#lic_owner')
ShowTip.addEventListener("focusin", tipIn, false)
ShowTip.addEventListener("focusout", tipOut, false)

LicenseTab.addEventListener("click", showLicenseTab, false)
UsersTab.addEventListener("click", showUsersTab, false)

document.getElementById('Users').style.display = "none"

const sendLic = document.querySelector('#sendLicense')
const getLic = document.querySelector('#getLicenses')

const sendUs = document.querySelector('#sendUser')
const getUs = document.querySelector('#getUsers')

sendLic.addEventListener("click", sendLicense, false)
getLic.addEventListener("click", getLicenses, false)

document.getElementById("table").addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        console.log("List item ", e.target.id, " was clicked!");
        console.log(e.target.id.toString().split('_')[1])
        deleteLicense(e.target.id.toString().split('_')[1])
    }
});

sendUs.addEventListener("click", sendUser, false)
getUs.addEventListener("click", getUsers, false)

document.getElementById("tableusers").addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        console.log("List item ", e.target.id, " was clicked!");
        console.log(e.target.id.toString().split('_')[1])
        deleteUser(e.target.id.toString().split('_')[1])
    }
});


import { deleteLicense, getLicenses, sendLicense } from "./Controllers/licenseController"
import { showLicenseTab, showUsersTab, tipIn, tipOut } from "./animation"
import { sendUser, getUsers, deleteUser } from "./Controllers/userController"
import { optionsUpdate } from "./helper"

optionsUpdate()