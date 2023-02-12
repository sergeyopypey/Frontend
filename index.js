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

start()

//Managing tip "начните вводить имя"
const ShowTip = document.querySelector('#lic_owner')
ShowTip.addEventListener("focusin", tipIn, false)
ShowTip.addEventListener("focusout", tipOut, false)

//Managing TAB
LicenseTab.addEventListener("click", showLicenseTab, false)
UsersTab.addEventListener("click", showUsersTab, false)
document.getElementById('Users').style.display = "none"

//Sending objects
const sendLic = document.querySelector('#sendLicense')
const sendUs = document.querySelector('#sendUser')

sendLic.addEventListener("click", sendLicense, false)
sendUs.addEventListener("click", sendUser, false)

//Deleting licenses
document.getElementById("tablelicense").addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "BUTTON" && e.target.className == 'deleteButton') {
        console.log("List item ", e.target.id, " was clicked!");
        console.log(e.target.id.toString().split('_')[1])
        deleteLicense(e.target.id.toString().split('_')[1])
    }
});

//Deleting users
document.getElementById("tableusers").addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        console.log("List item ", e.target.id, " was clicked!");
        console.log(e.target.id.toString().split('_')[1])
        deleteUser(e.target.id.toString().split('_')[1])
    }
});

//Sorting Licenses
const sortBySummaryElement = document.querySelector('#sortBySummary')
const sortByOwnerElement = document.querySelector('#sortByOwner')
const sortByExpirationDateElement = document.querySelector('#sortByExpirationDate')

sortBySummaryElement.addEventListener("click", sortBySummary, false)
sortByOwnerElement.addEventListener("click", sortByOwner, false)
sortByExpirationDateElement.addEventListener("click", sortByExpirationDate, false)

//Importing functions
import { deleteLicense, getLicenses, sendLicense, insertLicense } from "./Controllers/licenseController"
import { showLicenseTab, showUsersTab, tipIn, tipOut, start } from "./animation"
import { sendUser, getUsers, deleteUser } from "./Controllers/userController"
import { optionsUpdate } from "./helper"
import { sortByExpirationDate, sortByOwner, sortBySummary } from "./sorting"
optionsUpdate()