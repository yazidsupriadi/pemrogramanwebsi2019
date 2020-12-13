var attempt = 5; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "ahmad2017" && password == "integrity"){
alert ("Login successfully");
window.location = "login succes"; 
return false;
}
else{
attempt --;
alert("Login gagal" +" " + "You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}