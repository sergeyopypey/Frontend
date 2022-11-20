alert('Server is workong')

const obj = {
  name: "Sergey",
  surname: "Troshin"
}
async function getUsers() {
    url = 'http://localhost:8888/api/user'
    let response = await fetch(url, {
        method: 'POST',
        headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
        body: JSON.stringify(obj)
    })
    if (response.ok) {
        let json = await response.json();
        console.log(json)
    } else alert("Ошибка HTTP: " + response.status)

    alert('Success!!!!!!!!')
}