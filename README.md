# PRAKTIKUM 6 — JAVASCRIPT DOM DAN EVENT HANDLING

**Nama:** [Daniel MOhammed]  
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

<img width="985" height="389" alt="image" src="https://github.com/user-attachments/assets/319cad2b-ab83-4028-b83f-d2df4cd7b8ed" />

<img width="817" height="295" alt="Screenshot 2026-10-26 153408" src="https://github.com/user-attachments/assets/a4c172de-9a48-46cc-be4f-a3295273802a" />



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

<img width="403" height="87" alt="Screenshot 2026-10-26 153456" src="https://github.com/user-attachments/assets/2c08a3f4-52fa-42df-b16c-0d51244ceaee" />



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

<img width="832" height="67" alt="Screenshot 2026-10-26 153534" src="https://github.com/user-attachments/assets/ea39479d-8392-4d79-a8bb-c0e259171a5f" />


<img width="820" height="75" alt="Screenshot 2026-10-26 153625" src="https://github.com/user-attachments/assets/d1d4ff2d-3c40-4e9c-b4f3-6e1ea5dfbe19" />


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

<img width="472" height="125" alt="Screenshot 2026-10-26 153722" src="https://github.com/user-attachments/assets/df492b30-df91-4804-ab4a-8ef36d4a7d22" />

<img width="576" height="186" alt="Screenshot 2026-10-26 153758" src="https://github.com/user-attachments/assets/a9bc695a-be3e-4b3e-8a5d-74c8cab5b649" />

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
