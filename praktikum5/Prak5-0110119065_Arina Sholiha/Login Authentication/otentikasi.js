function coba() {
    let username =document.forms["myform"]["username"].value;
    let password =document.forms["myform"]["password"].value;
    if (username == "ahmad2017" && password == "integrity") {
        alert("Login Berhasil");
        window.open("halaman.html");
    } else{
        alert("Login Gagal");
    }
} 