function validate() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (username == "Fiyyahnjh" && password == '01234') {
        alert("Login Anda Berhasil");
        window.location = "berhasil.html";
        return false
    } else {
        alert('Login Anda Gagal');
        return false
    }
}