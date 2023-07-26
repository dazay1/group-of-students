function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);
}

let list = document.getElementById("student-list");

function createData(item) {
    list.innerHTML += `                        
            <tr  id="tr">
                <td>
                    <a href="./group.html?id=${item.id}">${item.title}</a>
                </td>
                <td>
                    <button  data-id=${item.id} class="btn btn-warning btn-sm edit" onclick="editItem(this)">Edit</a>
                    <button  data-id=${item.id} onclick="delItem(this)" class="btn btn-danger btn-sm delete">Delete</button>
                </td>
                </tr>
    `
}
// function editData(item) {
//     list.innerHTML += `                        
//             <tr id="tr">
//                 <td>${item.name}</td>
//                 <td>${item.inp4}</td>
//                 <td>
//                     <button href="#"data-id=${item.id}   class="btn btn-warning btn-sm edit" onclick="editItem(this)">Edit</a>
//                     <button href="#" data-id=${item.id} onclick="delItem(this)" class="btn btn-danger btn-sm delete">Delete</button>
//                 </td>
//                 </tr>
//     `
// }
function delItem(e) {
    fetch(`https://test-crud-2.onrender.com/group/${e.getAttribute("data-id")}`, {
        method: "DELETE",
    }).then(res => res.json())
        .then(data => {
            e.parentElement.parentElement.remove()
        })
}

function editItem(e) {
    fetch(`https://test-crud-2.onrender.com/group/${e.getAttribute("data-id")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title:inp1.value
        })
    })
        .then(res => res.json())
        .then(data => {
            window.location.reload()
        })
    console.log(data);
}
document.getElementById("search-input").addEventListener('input', () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('#tr')
    listItems.forEach((item) => {
        let text = item.textContent
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = '';
            console.log("as");
        } else {
            item.style.display = 'none';
        }
    })
});