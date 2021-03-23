function validateForm() {
    let nama = document.getElementById("nama").value == "" ? "Nama, " : "";
    let nomor = document.getElementById("nomor").value == "" ? "Nomor, " : "";
    let status = document.getElementById("status").value == "" ? "Status, " : "";
    let email = document.getElementById("email").value == "" ? "Email, " : "";
    let telp = document.getElementById("telp").value == "" ? "Telepon, " : "";
    let rujukan = document.getElementById("rujukan").value == "" ? "Rujukan, " : "";
    let kategori = document.getElementById("kategori").value == "" ? "Kategori, " : "";
    let judul = document.getElementById("judul").value == "" ? "Judul, " : "";
    let deskripsi = document.getElementById("deskripsi").value == "" ? "Deskripsi, " : "";
    let tanggal = document.getElementById("tanggal").value == "" ? "Tanggal, " : "";

    let notification = nama + nomor + status + email + telp + rujukan + kategori + judul + deskripsi + tanggal;

    if (!emailCheck()) {
        alert("Format email tidak benar");
    }

    if (!(notification == "")) {
        alert(notification + " belum diisi");
    } else {
        alert("Laporan telah dikirim");
    }

}

function emailCheck() {
    let email = document.getElementById("email").value;
    
    for (let i=0; i<email.length; i++) {
        if (email[i] == '@') {
            return true;
        }
    }
}

function redirect() {
    window.location.href = "login.html";
}