function Login(){

}
    
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const submit = document.querySelector(".submit");

submit.addEventListener("click", function(){
    console.log("button diklik");
    
    if(user.value == "ahmad2017" && pass.value == "integrity"){
        alert("login sukses")
        window.location="akunmasuk.html";
    }else{
        alert("login gagal")
    }
})
