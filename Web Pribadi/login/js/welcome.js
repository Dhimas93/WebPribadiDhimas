document.addEventListener("DOMContentLoaded", function() {
    var userInfo = document.getElementById("userInfo");
    var authArea = document.getElementById("authArea");

    var statusLogin = localStorage.getItem("statusLogin");
    var username = localStorage.getItem("username");

    if (statusLogin === "true" && username) {
        // Merubah teks navigasi sesuai instruksi LKPD
        if (userInfo) {
            userInfo.innerHTML = "Halo, " + username.toUpperCase();
        }

        // Mengubah Tombol Login menjadi Logout
        if (authArea) {
            authArea.innerHTML = "<button onclick='logoutProses()' class='nav-cta' style='padding:8px 16px; background:#e53e3e; color:white; border:none; border-radius:4px; cursor:pointer;'>LOGOUT</button>";
        }
    }
});

function logoutProses() {
    // Hapus data session
    localStorage.removeItem("username");
    localStorage.removeItem("statusLogin");

    // Reload halaman otomatis
    window.location.reload();
}