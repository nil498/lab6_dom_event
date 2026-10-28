# PRAKTIKUM 6 — JAVASCRIPT DOM DAN EVENT HANDLING

**Nama:** [Daniel Mohammed]  
**NIM:** [312510466]  
**Mata Kuliah:** Pemrograman Web  
**Lab:** Praktikum 6 — JavaScript DOM dan Event Handling

---

## Struktur File

Program terdiri dari tiga file utama:

- `index.html` — struktur halaman dan elemen yang digunakan.
- `style.css` — pengaturan tampilan dan class CSS.
- `script.js` — logika JavaScript dan event handling.

File JavaScript dihubungkan menggunakan atribut `defer` agar dijalankan setelah HTML selesai diproses.

<img width="237" height="279" alt="image" src="https://github.com/user-attachments/assets/c924281a-06de-45b5-a611-3f85fbf54df7" />


## D. Penjelasan Program

### 1. Manipulasi DOM

Bagian ini menggunakan `document.getElementById()` untuk mengambil elemen HTML dan `textContent` untuk mengubah teks pada judul serta paragraf. Tombol juga menggunakan `addEventListener("click", ...)` untuk menampilkan waktu ketika diklik.

**Kode:**

```javascript
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombol = document.getElementById("tombolAksi");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript";

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
```

<img width="985" height="389" alt="image" src="https://github.com/user-attachments/assets/a9818430-5b8c-47f7-bab2-a01e69efa2f9" />



### 2. Mengubah Class dan Gaya CSS

Bagian ini menggunakan `classList.toggle()` untuk menambahkan atau menghapus class CSS `highlight` dan `teks-besar` ketika tombol ditekan.

**Kode JavaScript:**

```javascript
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});
```

**Kode CSS:**

```css
.highlight {
    color: #173f75;
    background-color: #e6f1ff;
    border-left: 4px solid #3478c8;
    padding: 12px;
}

.teks-besar {
    font-size: 1.4rem;
}
```

<img width="552" height="202" alt="image" src="https://github.com/user-attachments/assets/25c28074-95c6-4b7a-abff-3283a831e84b" />



<img width="716" height="371" alt="image" src="https://github.com/user-attachments/assets/8d84aef5-9c55-4448-896a-3cb9bdbc29b4" />


### 3. Penghitung Karakter

Bagian ini menghitung jumlah karakter yang dimasukkan pada kolom nama secara langsung menggunakan event `input` dan properti `value.length`.

**Kode:**

```javascript
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});
```

<img width="468" height="103" alt="image" src="https://github.com/user-attachments/assets/ffcbc525-78ed-44dc-a6b5-1cade7e92ba3" />


### 4. Validasi Form Pendaftaran

Validasi form digunakan untuk memeriksa nama, email, dan usia. Nama harus terdiri dari minimal tiga karakter, email harus memiliki format yang valid, serta usia harus berupa bilangan bulat antara 17 dan 100.

Event `submit` digunakan untuk menangani pengiriman form. `preventDefault()` mencegah halaman dimuat ulang ketika form diproses.

**Kode:**

```javascript
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanForm.textContent = "Nama wajib diisi minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});
```

<img width="1079" height="66" alt="image" src="https://github.com/user-attachments/assets/ff78ca11-be1a-4448-a573-cd7fa695c1e0" />


<img width="996" height="110" alt="image" src="https://github.com/user-attachments/assets/1beb653c-0364-4b95-85c2-345f89f7dbec" />


### 5. To-do List

To-do List digunakan untuk menambahkan tugas, menandai tugas sebagai selesai, dan menghapus satu tugas. Elemen HTML dibuat secara dinamis menggunakan `document.createElement()`.

**Kode untuk menambahkan tombol hapus:**

```javascript
const hapus = document.createElement("button");
hapus.type = "button";
hapus.textContent = "Hapus";

hapus.addEventListener("click", function () {
    item.remove();
});
```

Tombol selesai menggunakan `classList.toggle("selesai")`, sedangkan tombol hapus menggunakan `item.remove()` untuk menghilangkan tugas yang dipilih.

**Kode CSS:**

```css
.selesai span {
    text-decoration: line-through;
    color: #687386;
}

li {
    margin-bottom: 8px;
}
```

<img width="504" height="243" alt="image" src="https://github.com/user-attachments/assets/c7efd2a3-8115-4ee3-ace8-1e92c6257d0c" />

<img width="491" height="241" alt="image" src="https://github.com/user-attachments/assets/3fc765d9-3b97-45e3-95f5-d35eca1912fe" />


<img width="461" height="142" alt="Screenshot 2026-10-26 153825" src="https://github.com/user-attachments/assets/c5d14d42-a001-4877-bd6f-4f6e8f7bcbf9" />

### 6. Event Change pada Dropdown Sesi Workshop

Bagian ini menggunakan event `change` untuk mendeteksi perubahan pilihan sesi workshop. Sesi yang dipilih kemudian ditampilkan pada paragraf.

**Kode:**

```javascript
const sesi = document.getElementById("sesi");
const pesanSesi = document.getElementById("pesanSesi");

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        pesanSesi.textContent = "Belum ada sesi yang dipilih.";
    } else {
        pesanSesi.textContent = "Sesi yang dipilih: " + sesi.value;
    }
});
```

<img width="365" height="137" alt="Screenshot 2026-10-26 153908" src="https://github.com/user-attachments/assets/4b3a085f-cb7c-4887-a344-14fe2b93064e" />


### 7. Menyembunyikan dan Menampilkan Paragraf

Bagian ini menggunakan `classList.toggle()` untuk menambahkan atau menghapus class `sembunyi`. Class tersebut mengatur apakah paragraf ditampilkan atau disembunyikan.

**Kode JavaScript:**

```javascript
const paragraf = document.getElementById("paragraf");
const tombolTampil = document.getElementById("tombolTampil");

tombolTampil.addEventListener("click", function () {
    paragraf.classList.toggle("sembunyi");

    if (paragraf.classList.contains("sembunyi")) {
        tombolTampil.textContent = "Tampilkan";
    } else {
        tombolTampil.textContent = "Sembunyikan";
    }
});
```

**Kode CSS:**

```css
.sembunyi {
    display: none;
}
```

<img width="565" height="96" alt="Screenshot 2026-10-26 153953" src="https://github.com/user-attachments/assets/49d5b628-fc29-4453-8706-b99e793aa8f4" />

<img width="612" height="133" alt="Screenshot 2026-10-26 154022" src="https://github.com/user-attachments/assets/37f4a286-a67a-4db4-bcfc-167ff6c98c03" />



## F. Kesimpulan

Berdasarkan praktikum ini, JavaScript DOM dan event handling dapat digunakan untuk membuat halaman web yang interaktif. Program berhasil menerapkan manipulasi teks, perubahan class CSS, penghitung karakter, validasi form, To-do List dengan fitur tambah, selesai, dan hapus, event `change` pada dropdown, serta fitur menyembunyikan dan menampilkan paragraf.

Penggunaan `defer` membantu memastikan script dijalankan setelah HTML selesai diproses sehingga elemen yang diperlukan tersedia ketika JavaScript dijalankan.
