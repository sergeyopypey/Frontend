import { optionsUpdate } from "./helper"
import { getLicenses, insertLicense } from "./Controllers/licenseController"
import { getUsers } from "./Controllers/userController"

//Load information on first start
export async function start() {
    let mainbody = document.getElementById('mainbody')
    mainbody.style.filter = "blur(4px)"
    mainbody.style.pointerEvents = "none"

    let loginform = document.querySelector('#loginform')
    loginform.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            console.log("Enter pressed");
            const userLogin = document.getElementById('user_login').value
            const userPassword = document.getElementById('user_password').value
            console.log(userLogin, userPassword)
            loginform.style.display = "none"
            document.getElementById('mainbody').style.pointerEvents = "none"
            mainbody.style.pointerEvents = ""
            mainbody.style.filter = ""
            if (userLogin != 'admin' || userPassword != 'admin') {
                let usersTab = document.getElementById('UsersTab')
                usersTab.style.pointerEvents = "none"
            }
        }
    });

    const json = await getLicenses()
    insertLicense(json)
}

//Show tab "Лицензии"
export async function showLicenseTab(event) {
    optionsUpdate()
    document.getElementById('Users').style.display = "none"
    document.getElementById('License').style.display = "block"
    var tablinks = document.getElementsByClassName("tablinks")
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    event.currentTarget.className += " active"
    const json = await getLicenses()
    insertLicense(json)

}

//Show tab "Пользователи"
export function showUsersTab(event) {
    document.getElementById('License').style.display = "none"
    document.getElementById('Users').style.display = "block"
    var tablinks = document.getElementsByClassName("tablinks")
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    event.currentTarget.className += " active"
    getUsers()
}

//Show tip "начните вводить имя"
export function tipIn() {
    document.getElementById('tip').style.display = "inline"
    document.getElementById('tip').style.animation = "tipanimIn 1s"
    addEventListener('animationend', (event) => { document.getElementById('tip').style.display = "inline" });
}

//Hide tip "начните вводить имя"
export function tipOut() {
    document.getElementById('tip').style.animation = "tipanimOut 1s"
    addEventListener('animationend', (event) => { document.getElementById('tip').style.display = "none" });
}