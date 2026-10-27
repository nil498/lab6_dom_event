
const formWorkshop = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const jumlahKarakter = document.getElementById("jumlahKarakter");
const infoSesi = document.getElementById("infoSesi");
const pesan = document.getElementById("pesan");
const ringkasan = document.getElementById("ringkasan");
const tombolReset = document.getElementById("tombolReset");

// 1. Menghitung jumlah karakter nama
nama.addEventListener("input", function () {
    jumlahKarakter.textContent =
        nama.value.length + " karakter";
});

// 2. Menampilkan sesi yang dipilih
sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        infoSesi.textContent = "";
    } else {
        infoSesi.textContent =
            "Sesi dipilih: " + sesi.value;
    }
});

// 3. Validasi form pendaftaran
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const sesiValue = sesi.value;

    pesan.textContent = "";
    pesan.className = "";
    ringkasan.hidden = true;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namaValue.length < 3) {
        tampilkanPesan(
            "Nama wajib diisi minimal 3 karakter.",
            "error"
        );
        nama.focus();
        return;
    }

    if (!polaEmail.test(emailValue)) {
        tampilkanPesan(
            "Masukkan alamat email yang valid.",
            "error"
        );
        email.focus();
        return;
    }

    if (sesiValue === "") {
        tampilkanPesan(
            "Silakan pilih sesi workshop.",
            "error"
        );
        sesi.focus();
        return;
    }

    document.getElementById("hasilNama").textContent =
        namaValue;

    document.getElementById("hasilEmail").textContent =
        emailValue;

    document.getElementById("hasilSesi").textContent =
        sesiValue;

    ringkasan.hidden = false;

    tampilkanPesan(
        "Pendaftaran berhasil!",
        "sukses"
    );
});

// 4. Tombol reset
tombolReset.addEventListener("click", function () {
    pesan.textContent = "";
    pesan.className = "";
    jumlahKarakter.textContent = "0 karakter";
    infoSesi.textContent = "";
    ringkasan.hidden = true;
});

// Fungsi untuk menampilkan pesan
function tampilkanPesan(teks, jenis) {
    pesan.textContent = teks;
    pesan.className = jenis;
}
