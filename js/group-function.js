let list = document.getElementById("student-list");
function createData(item) {
    list.innerHTML += `                        
            <tr  id="tr">
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>
                    <button  data-id=${item.id} class="btn btn-warning btn-sm edit" onclick="editItem(this)">Edit</a>
                    <button  data-id=${item.id} onclick="delItem(this)" class="btn btn-danger btn-sm delete">Delete</button>
                </td>
                </tr>
    `
}
function delItem(e) {
    fetch(`https://test-crud-2.onrender.com/user/${param1}/${e.getAttribute("data-id")}`, {
        method: "DELETE",
    }).then(res => res.json())
        .then(data => {
            e.parentElement.parentElement.remove()
        })
}

function editItem(e) {
    fetch(`https://test-crud-2.onrender.com/user/${param1}/${e.getAttribute("data-id")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inp1.value,
            age: inp2.value
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