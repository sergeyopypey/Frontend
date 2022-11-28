export function insertText(text) {
    document.getElementById("add_information").innerHTML += `${text}\n`;
}

export function toHTML(json, days) {
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

export function cleanTable() {
    const list = document.getElementById("table");
    while (list.children[1]) {
    list.removeChild(list.lastChild);
    }
}