let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");

fetch("https://test-crud-2.onrender.com/group")
    .then(res => res.json())
    .then(data => {
        data.DATA.map(item => {
            createData(item)
        })
    })

btn.addEventListener("click", (e) => {
    if (inp1.value == "") {
        showAlert("Please fill in all fields", "danger");
    }
    else {
        fetch("https://test-crud-2.onrender.com/group", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title:inp1.value,
            })
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload()
                createData(item)
            })
    }
})
