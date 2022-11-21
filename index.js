const sayHello = document.querySelector('#sayHello')
const sendLic = document.querySelector('#sendLicense')
const getLic = document.querySelector('#getLicenses')

function Hello() {
    alert("Hello, Sergey!")
}
sayHello.addEventListener("click", Hello, false)
sendLic.addEventListener("click", sendLicense, false)
getLic.addEventListener("click", getLicenses, false)


function sendLicense() {
    let title = document.getElementById('title')
    let lic_number = document.getElementById('lic_number')
    let author = document.getElementById('author')
    let lic_owner = document.getElementById('lic_owner')
    let inspired_date = document.getElementById('inspired_date')
    let recieved_date = document.getElementById('recieved_date')
    let user_id = document.getElementById('user_id')
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
    } else alert("Ошибка HTTP: " + response.status)
    alert('Data sent!')
}

function toHTML(json) {
    return `
            <tr>
                <th>${json.title}</th>
                <th>${json.lic_number}</th>
                <th>${json.author}</th>
                <th>${json.lic_owner}</th>
                <th>${json.inspired_date}</th>
                <th>${json.recieved_date}</th>
                <th>${json.user_id}</th>
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
        for (let i=0; i<json_size; i++){
            $site.insertAdjacentHTML('beforeend', toHTML(json[i]))
        }
    } else alert("Ошибка HTTP: " + response.status)
    alert('Data recieved!')
}