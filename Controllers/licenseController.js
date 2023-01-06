import {LicenseToHTML, cleanTable, optionsUpdate} from "../helper.js"

export async function sendLicense() {
    let title = document.getElementById('title')
    let lic_number = document.getElementById('lic_number')
    let author = document.getElementById('author')
    let lic_owner = document.getElementById('lic_owner')
    let expiration_date = document.getElementById('expiration_date')
    let recieved_date = document.getElementById('recieved_date')
    var date = new Date()
    let owner = lic_owner.value
    let user_id = await optionsUpdate()
    const license = {
        title: title.value,
        lic_number: lic_number.value,
        author: author.value,
        lic_owner: owner,
        expiration_date: expiration_date.value.toString(),
        recieved_date: recieved_date.value.toString(),
        creating_date: date, 
        user_id: user_id.get(owner)
    }
    if (!(title.value, lic_number.value, author.value, lic_owner.value, expiration_date.value, recieved_date.value))
    {
        alert('Заполните все поля!')
        return
    }
    if(!user_id.get(owner))
    {
        alert('Неверный владелец лицензии!')
        return
    }
    console.log(JSON.stringify(license))
    let url = 'http://localhost:8888/api/license'
    let response = await fetch(url, {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
        body: JSON.stringify(license)
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        alert('Data sent!')
    } else alert("Ошибка HTTP: " + response.status)
}

export async function getLicenses() {
    let url = 'http://localhost:8888/api/license'
    let response = await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        let json_size = json.length
        const $site = document.querySelector('#table')
        cleanTable()
        for (let i=0; i<json_size; i++){
            $site.insertAdjacentHTML('beforeend', LicenseToHTML(json[i]))
        }
        alert('Data recieved!')
    } else alert("Ошибка HTTP: " + response.status)
}



export async function deleteLicense(id) {
    let lic_id = parseInt(id)
    if(!confirm(`Confirm deleting License with ID=${lic_id}`))
    {
        return
    }
    let url = `http://localhost:8888/api/license/${lic_id}`
    let response = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        alert('Data deleted!')
    } else alert("Ошибка HTTP: " + response.status)
}