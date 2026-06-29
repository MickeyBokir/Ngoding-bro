const input = document.querySelector('#inputTugas');
const btnTambah = document.querySelector('#btnTambah');
const listTugas = document.querySelector('#listTugas');

function tambahTugas() {
    const teks = input.value;

    if (teks === '') {
        alert('Tugas tidak boleh kosong!');
        return;
    }
    const li = document.createElement('li');
    li.textContent = teks;

    li.addEventListener('click', function() {
        li.classList.toggle('selesai');
    });

    const btnHapus = document.createElement('button');
    btnHapus.textContent = 'X';
    btnHapus.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });
    li.appendChild(btnHapus);
    listTugas.appendChild(li);
    input.value = '';
}

btnTambah.addEventListener('click', tambahTugas);
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        tambahTugas();
    }
});
