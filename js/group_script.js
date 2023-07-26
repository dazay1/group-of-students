const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const param1 = urlParams.get('id');
console.log("Id:", param1);

let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");

fetch(`https://test-crud-2.onrender.com/user/${param1}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.DATA.users.map(item => {
            createData(item)
        })
    })

    btn.addEventListener("click", (e) => {
        if (inp1.value == "" || inp2.value == "") {
            showAlert("Please fill in all fields", "danger");
        }
        else {
            fetch(`https://test-crud-2.onrender.com/user/${param1}`, {
                method: "POST",
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
                    createData(item)
                })
        }
    })