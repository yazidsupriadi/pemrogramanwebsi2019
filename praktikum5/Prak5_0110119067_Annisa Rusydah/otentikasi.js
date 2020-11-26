function login()
    {
        let username=document.forms["form"]["username"].value;
        let password=document.forms["form"]["password"].value;

        if(username=="annisarusydah" && password=="nisa")
            {
                alert("Login berhasil");
                window.open("Login_berhasil.html");
            }
        else
            {
                alert("Gagal Login. Username atau Password Salah");
            }
    }