function formvalidasi(){
    var name=document.validasi.name.value;
    var password=document.validasi.password.value;

    if (name==null || name==""){
        alert("Nama tidak bisa");
        return false;
    }else if(password.length<6){
            document.getElementById("user").innerHTML = "nama" + name;
            document.getElementById("pass").innerHTML = "password" + password;
        return false;
        


    }

}

