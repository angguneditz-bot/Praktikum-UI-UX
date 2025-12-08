function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let userBenar = "ahmad2017";
    let passBenar = "integrity";

    if (user === userBenar && pass === passBenar) {
        alert("Login sukses!");
        window.location.href = "succes.html"; // pindah halaman
        return false;
    } else {
        alert("Login gagal! Username atau password salah.");
        return false; // tetap di halaman login
    }
}
