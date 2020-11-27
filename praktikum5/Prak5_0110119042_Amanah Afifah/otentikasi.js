function validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "afifahaha" && password == "hafifa"){
        var afifah;
        afifah = confirm ("Login Success!");
         
        if (afifah == true){
            window.location = "new.html";
        }else{
            window.location.reload();
        }
        
    }else if( username == "" || username == null || password == "" || password == null){
        alert("Cannot be Empty!");
    }else{
        alert("Login Failed for User!");
    }
} 