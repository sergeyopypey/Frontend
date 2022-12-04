export function toHTML(json) {
    var days = (Date.parse(json.inspired_date) - Date.now()) / (1000 * 60 * 60 * 24)
    var inspired_date = new Date(json.inspired_date)
    var recieved_date = new Date(json.recieved_date)
    return `
            <tr>
                <th>${json.id}</th>
                <td>${json.title}</td>
                <td>${json.lic_number}</td>
                <td>${json.author}</td>
                <td>${json.lic_owner}</td>
                <td>${inspired_date.toLocaleDateString()}</td>
                <td>${recieved_date.toLocaleDateString()}</td>
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