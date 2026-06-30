fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const { name, email } = data
        console.log(name, email);
    })
    .catch(error => {
        console.log(error);
    })

//Fetch data user, lalu tampilkan namanya di dalam <div id="hasil">
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const { name } = data
        const hasilDiv = document.getElementById("hasil");
        hasilDiv.textContent = name;
    })

//Fetch semua users dari:
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    //Tampilkan semua nama user pakai forEach atau map
    .then(data => {
        const hasilDiv = document.getElementById("hasil");
        data.forEach(user => {
            const p = document.createElement("p");
            p.textContent = user.name;
            hasilDiv.appendChild(p);
        })
    })
    const btn = document.querySelector("#btnFakta");
    const hasilFakta = document.querySelector("#fakta");

    btn.addEventListener("click", () => {
        fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            hasilFakta.textContent = data.fact;
        });
    });