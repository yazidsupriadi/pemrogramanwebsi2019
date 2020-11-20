// var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "ahmad2017" && password == "integrity"){
        var z;
        z = confirm ("Login sukses");
         // Redirecting to other page.
        if (z == true){
            window.location = "home.html";
        }else{
            window.location.reload();
        }
        // return false; 
    }else if( username == "" || username == null || password == "" || password == null){
        alert("Tidak boleh kosong");
    }else{
        alert("Error, gagal login");
    }
}