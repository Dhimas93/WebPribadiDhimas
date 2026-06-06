function loginProses() {
    var userVal = document.getElementById("username").value;
    var passVal = document.getElementById("password").value;
    var messageDiv = document.getElementById("message");
    var alertBox = document.getElementById("alertBox");

    // Validasi Sederhana Client-Side REST-like Simulation
    if (userVal === "heri" && passVal === "123") {
        // Set session di localStorage
        localStorage.setItem("username", userVal);
        localStorage.setItem("statusLogin", "true");

        messageDiv.style.color = "#2f855a";
        messageDiv.innerHTML = "Login Sukses! Mengalihkan...";

        setTimeout(function() {
            window.location.href = "../index.html";
        }, 1500);
    } else {
        // Tampilkan Custom Alert sesuai LKPD
        alertBox.innerHTML = "<div class='alert'>Username atau Password Salah!</div>";
        messageDiv.style.color = "#e53e3e";
        messageDiv.innerHTML = "Gagal Masuk Aplikasi.";

        // Hilangkan alert dalam 3 detik
        setTimeout(function() {
            alertBox.innerHTML = "";
        }, 3000);
    }
}