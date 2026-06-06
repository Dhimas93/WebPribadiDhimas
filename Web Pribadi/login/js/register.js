function registerProses() {
    var userReg = document.getElementById("regUsername").value;
    var passReg = document.getElementById("regPassword").value;
    var messageDiv = document.getElementById("message");

    if (userReg.trim() === "" || passReg.trim() === "") {
        messageDiv.style.color = "#e53e3e";
        messageDiv.innerHTML = "Data tidak boleh kosong!";
        return;
    }

    // Simulasi penyimpanan akun baru ke dalam REST Client storage
    localStorage.setItem("reg_user", userReg);
    localStorage.setItem("reg_pass", passReg);

    messageDiv.style.color = "#2f855a";
    messageDiv.innerHTML = "Registrasi Berhasil! Silakan menuju halaman Login.";

    setTimeout(function() {
        window.location.href = "index.html";
    }, 2000);
}