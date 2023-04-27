import { UsersToHTML, optionsUpdate } from "../helper"


export async function sendUser() {
    let second_name = document.getElementById('second_name')
    let first_name = document.getElementById('first_name')
    let third_name = document.getElementById('third_name')
    let email = document.getElementById('email')
    let department = document.getElementById('department')
    let password = 3322
    var date = new Date()
    let fullname = second_name.value + ' ' + first_name.value + ' ' + third_name.value
    const user = {
        user_name: fullname,
        department: department.value,
        email: email.value,
        creating_date: date,
        user_password: password
    }
    if (!(second_name.value, first_name.value, third_name.value, email.value, department.value)) {
        alert('Заполните все поля пользователя!')
        return
    }

    console.log(JSON.stringify(user))
    let url = 'http://localhost:8888/api/user'
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        //alert('Data sent!')
        optionsUpdate()
    } else alert("Ошибка HTTP: " + response.status)
    getUsers()
}

export async function getUsers() {
    let url = 'http://localhost:8888/api/user'
    let response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=utf-8' }
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        let json_size = json.length
        const $site = document.querySelector('#tableusers')
        {
            const list = document.getElementById("tableusers");
            while (list.children[1]) {
                list.removeChild(list.lastChild);
            }
        }
        for (let i = 0; i < json_size; i++) {
            $site.insertAdjacentHTML('beforeend', UsersToHTML(json[i]))
        }
        console.log('Data recieved!')
        optionsUpdate()
    } else alert("Ошибка HTTP: " + response.status)
}

export async function deleteUser(id) {
    let user_id = parseInt(id)
    if (!confirm(`Confirm deleting User with ID=${user_id}`)) {
        return
    }
    let canYouDeleteItem = await checkOneuser(user_id)
    if (canYouDeleteItem) {
        alert('Этот пользователь фигурирует в качестве владельца лицензии. Удаление запрещено!')
        return
    }
    let url = `http://localhost:8888/api/user/${user_id}`
    let response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json;charset=utf-8' }
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
        //alert('Data deleted!')
        optionsUpdate()
    } else alert("Ошибка HTTP: " + response.status)
    getUsers()
}

export async function checkOneuser(id) {
    let user_id = parseInt(id)
    let url = `http://localhost:8888/api/user/${user_id}`
    let response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json;charset=utf-8' }
    })
    if (response.ok) {
        let json = await response.json();
        return json
    } else alert("Ошибка HTTP: " + response.status)
}