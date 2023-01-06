import { optionsUpdate } from "./helper"

export async function showLicenseTab(event) {
    optionsUpdate()
    document.getElementById('Users').style.display = "none"
    document.getElementById('License').style.display = "block"
    var tablinks = document.getElementsByClassName("tablinks")
    for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    event.currentTarget.className += " active"
}
export function showUsersTab(event) {
    document.getElementById('License').style.display = "none"
    document.getElementById('Users').style.display = "block"
    var tablinks = document.getElementsByClassName("tablinks")
    for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    event.currentTarget.className += " active"
}


export function tipIn(){
    document.getElementById('tip').style.display = "inline"
    document.getElementById('tip').style.animation = "tipanimIn 1s"
    addEventListener('animationend', (event) => {document.getElementById('tip').style.display = "inline"});
}

export function tipOut(){
    document.getElementById('tip').style.animation = "tipanimOut 1s"
    addEventListener('animationend', (event) => {document.getElementById('tip').style.display = "none"});
}