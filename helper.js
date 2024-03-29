import { sendEmail } from "./mailHandler"

export function LicenseToHTML(json) {
    var days = (Date.parse(json.expiration_date) - Date.now()) / (1000 * 60 * 60 * 24)
    var expiration_date = new Date(json.expiration_date)
    var recieved_date = new Date(json.recieved_date)
    let color = "green"
    if (between(days, 0, 30) || days < 0) {
        color = 'red'
        //sendEmail(days, json.user_id, false)
    }
    if (between(days, 30, 60)) {
        color = 'orange'
        //sendEmail(days, json.user_id, true)
    }
    return `
            <tr>
                <th>${json.id}</th>
                <td>${json.title}</td>
                <td>${json.lic_number}</td>
                <td>${json.author}</td>
                <td>${json.lic_owner}</td>
                <td>${recieved_date.toLocaleDateString()}</td>
                <td>${expiration_date.toLocaleDateString()}</td>
                <td style="background-color: ${color}">${Math.floor(days)} дней</td>
                <!-- <td>${json.user_id}</td> -->
                <th><input type="file" id="avatar_${json.id}" title=" " accept="image/png, image/jpeg"></th>
                <th><button class="deleteButton" id="delete_${json.id}">X</button></th>
            </tr>`
}

export function UsersToHTML(json) {
    return `
        <tr>
            <th>${json.id}</th>
            <th>${json.user_name}</th>
            <th>${json.department}</th>
            <th>${json.email}</th>
            <th>Количество лицензий</th>
            <th><button class="deleteButton" id="delete_${json.id}">X</button></th>
        </tr>
     `
}

export function cleanTable() {
    const list = document.getElementById("tablelicense");
    while (list.children[1]) {
        list.removeChild(list.lastChild);
    }
}

export async function optionsUpdate() {
    let url = 'http://localhost:8888/api/user'
    let response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=utf-8' }
    })
    if (response.ok) {
        let json = await response.json();
        //console.log(json)
        let json_size = json.length
        const $site = document.querySelector('#lic_owner')
        {
            const list = document.getElementById("lic_owner");
            while (list.children[1]) {
                list.removeChild(list.lastChild);
            }
        }
        const users = new Map()
        const usersNotSorted = []
        for (let i = 0; i < json_size; i++) {
            usersNotSorted.push(json[i].user_name)
        }
        const usersSorted = usersNotSorted.sort()
        for (let i = 0; i < json_size; i++) {
            $site.insertAdjacentHTML('beforeend', `<option>${usersSorted[i]}</option>`)
            users.set(json[i].user_name, json[i].id)
        }
        return users
    }
}

function between(x, min, max) {
    return x >= min && x <= max
}