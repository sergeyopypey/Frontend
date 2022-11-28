// while(true){
//     let password = prompt('Введите пароль:', '')
//     if ( password == '3322') {
//         break
//     } else alert('Неверный пароль!')
// }

const sendLic = document.querySelector('#sendLicense')
const getLic = document.querySelector('#getLicenses')
const deleteLic = document.querySelector('#deleteLicense')
const cleanTab = document.querySelector('#cleanTable')
const testBut = document.querySelector('#testButton')

testBut.addEventListener("click", testButton, false)
sendLic.addEventListener("click", sendLicense, false)
getLic.addEventListener("click", getLicenses, false)
deleteLic.addEventListener("click", deleteLicense, false)
cleanTab.addEventListener("click", cleanTable, false)

function testButton() {
}

function insertText(text) {
    document.getElementById("add_information").innerHTML += `${text}\n`;
}

function cleanTable() {
    const list = document.getElementById("table");
    while (list.children[1]) {
    list.removeChild(list.lastChild);
    }
}


function sendLicense() {
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
    console.log(JSON.stringify(license))
    postLicense(license)
}

async function postLicense(license) {
    url = 'http://localhost:8888/api/license'
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

function toHTML(json, days) {
    return `
            <tr>
                <th>${json.id}</th>
                <td>${json.title}</td>
                <td>${json.lic_number}</td>
                <td>${json.author}</td>
                <td>${json.lic_owner}</td>
                <td>${json.inspired_date.split('T')[0]}</td>
                <td>${json.recieved_date.split('T')[0]}</td>
                <td>${Math.floor(days)} дней</td>
                <td>${json.user_id}</td>
                <td><input type="file" id="avatar_${json.id}" title=" " accept="image/png, image/jpeg"></td>
            </tr>`
}

async function getLicenses() {
    url = 'http://localhost:8888/api/license'
    let response = await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        json_size = json.length
        const $site = document.querySelector('#table')
        cleanTable()
        document.getElementById("add_information").innerHTML = ``
        for (let i=0; i<json_size; i++){
            let date_dif_milliseconds = Date.parse(json[i].inspired_date.split('T')[0]) - Date.now()
            let date_dif_days = date_dif_milliseconds / ( 1000 * 60 * 60 * 24)
            $site.insertAdjacentHTML('beforeend', toHTML(json[i], date_dif_days))
            if (date_dif_days < 30)
            {
                insertText(`Внимание! Лицензия №${json[0].id} истекает через ${Math.floor(date_dif_days)} дней`)
            }
        }
        alert('Data recieved!')
    } else alert("Ошибка HTTP: " + response.status)
}

async function deleteLicense(id) {
    let lic_id = document.getElementById('lic_id')
    confirm(`Confirm deleting License with ID=${lic_id.value}`)
    url = `http://localhost:8888/api/license/${lic_id.value}`
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