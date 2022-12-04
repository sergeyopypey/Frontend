import {insertText, toHTML, cleanTable} from "./helper.js"

export async function sendLicense() {
    
    let title = document.getElementById('title')
    let lic_number = document.getElementById('lic_number')
    let author = document.getElementById('author')
    let lic_owner = document.getElementById('lic_owner')
    let inspired_date = document.getElementById('inspired_date')
    let recieved_date = document.getElementById('recieved_date')
    
    const license = {
        title: title.value,
        lic_number: lic_number.value,
        author: author.value,
        lic_owner: lic_owner.value,
        inspired_date: inspired_date.value.toString(),
        recieved_date: recieved_date.value.toString(),
        user_id: 12
    }
    if (!(title.value, lic_number.value, author.value, lic_owner.value, inspired_date.value, recieved_date.value))
    {
        alert('Заполните все поля!')
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
            $site.insertAdjacentHTML('beforeend', toHTML(json[i]))
        }
        alert('Data recieved!')
    } else alert("Ошибка HTTP: " + response.status)
}

export async function deleteLicense() {
    let lic_id = document.getElementById('lic_id')
    confirm(`Confirm deleting License with ID=${lic_id.value}`)
    let url = `http://localhost:8888/api/license/${lic_id.value}`
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