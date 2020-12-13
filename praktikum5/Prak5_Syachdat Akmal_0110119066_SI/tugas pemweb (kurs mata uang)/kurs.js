function getNama(){

}


const input = document.querySelector(".input");
const kursselect = document.querySelector(".kurs");
const hitungbtn = document.querySelector(".hitung");
const hasil = document.querySelector(".hasil");


hitungbtn.addEventListener("click", function(){
    console.log("button diklik");


    if (kursselect.value == "usd"){
        hasil.innerHTML = "Hasil: " + input.value * 13.000;
    }
    else if(kursselect.value == "eur"){
        hasil.innerHTML = "Hasil: " + input.value * 16.000;
    }
    else if(kursselect.value == "sgd"){
        hasil.innerHTML = "Hasil: " + input.value * 10.000;
    }
})


