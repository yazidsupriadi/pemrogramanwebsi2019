function cek() {
    var Name = document.getElementById("Name").value;
    var pass = document.getElementById("pass").value;
    if (Name == "ahmad2017" && pass == "integrity") {
        var A;
        A = confirm("You're Login");
        if (A == true) {
            window.location = "AccountPage.html";
        } else {
            window.location.reload();
        }
    } else if (Name == "" || Name == null || pass == "" || pass == null) {
        alert("WRONG!!! Try Again");
    } else {
        alert("WRONG!!! Try Again");
    }
}