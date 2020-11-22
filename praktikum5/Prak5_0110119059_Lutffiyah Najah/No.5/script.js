let nama = document.getElementById('nama')
let email = document.getElementById('email')
let jam = document.getElementById('jam')
let tujuan = document.getElementById('tujuan')
let tiket = document.getElementById('tiket')
let hasil = document.getElementById('hasil')

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault()

    validation();
});

function validation() {

    if (nama.value == "") {
        error(nama, "* Nama Tidak Boleh Kosong!");
        return false
    } else if (nama.value.length >= 30) {
        error(nama, "* Karakter tidak boleh lebih dari 30!");
        return false
    } else {
        sukses(nama);
    }

    if (email.value == "") {
        error(email, "* Email Tidak Boleh Kosong!");
        return false
    } else if (!isEmail(email.value)) {
        error(email, "* Email Tidak Valid");
        return false
    } else {
        sukses(email);
    }

    if (jam.value == "") {
        error(jam, "* Jam Keberangkatan Tidak Boleh Kosong!");
        return false
    } else {
        sukses(jam);
    }

    if (tujuan.value == "") {
        error(tujuan, "* Tujuan Tidak Boleh Kosong!");
        return false
    } else {
        sukses(tujuan);
    }

    if (tiket.value == "") {
        error(tiket, "* Jumlah Tiket Tidak Boleh Kosong");
        return false
    } else if (parseInt(tiket.value) < 1 || parseInt(tiket.value) > 10) {
        error(tiket, "* Jumlah Tiket Tidak Boleh Lebih Dari 10!");
        return false
    } else if (isNaN(tiket.value)) {
        error(tiket, "* Jumlah Tiket Harus Berupa Angka!")
        return false
    } else {
        sukses(tiket);
    }

    hasil.innerHTML = ` <h3> Data Form Valid </h3>
                        <p> Nama : ${nama.value}</p>
                        <p> Email : ${email.value}</p>
                        <p> Jam Keberangkatan : ${jam.value}</p>
                        <p> Tujuan Keberangkatan : ${tujuan.value}</p>
                        <p> Jumlah Tiket : ${tiket.value}</p>`

    function sukses(input) {
        const li = input.parentElement;
        const span = li.querySelector('span');
        span.innerHTML = 'sukses';
    }

    function error(input, pesan) {
        const li = input.parentElement;
        const span = li.querySelector('span');
        span.className = 'error';
        span.innerHTML = pesan;
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}