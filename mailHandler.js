export async function sendEmail() {
    let useraddress = '19.02.02@mail.ru'
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