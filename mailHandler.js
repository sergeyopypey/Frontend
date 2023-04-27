import { getLicenses } from "./Controllers/licenseController";
import { checkOneuser } from "./Controllers/userController";

export async function sendEmail(useraddress) {
    //let useraddress = '19.02.02@mail.ru'
    console.log('Sending Email')
    let url = 'http://localhost:8888/api/mail'
    let mail = {
        address: useraddress,
        days: 30,
        user: 'Трошин Сергей Андреевич',
        license: 'Лицензия на разработку ПО'
    }
    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(mail)
    });
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        return json
    } else alert("Ошибка HTTP: " + response.status)
}

export async function searchForExpiration() {
    console.log('Searching...')
    const json = await getLicenses()
    let json_size = json.length
    for (let i = 0; i < json_size; i++) {
        var days = (Date.parse(json[i].expiration_date) - Date.now()) / (1000 * 60 * 60 * 24)
        if (days < 0) {
            let user = await checkOneuser(json[i].user_id)
            console.log(user[0].email)
        }
    }
}