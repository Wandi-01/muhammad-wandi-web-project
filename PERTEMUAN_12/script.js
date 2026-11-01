// Latihan dasar JavaScript untuk pertemuan ke-12

const inputNama = document.getElementById("nama");
const tombolSapa = document.getElementById("tombolSapa");
const hasil = document.getElementById("hasil");

tombolSapa.addEventListener("click", function () {
    const nama = inputNama.value.trim();

    if (nama === "") {
        alert("Silakan masukkan nama terlebih dahulu.");
        inputNama.focus();
        return;
    }

    // Memunculkan sapaan nama dengan alert()
    alert("Halo, " + nama + "!");

    // Mencatat nama pengguna pada Console browser
    console.log("Nama yang dimasukkan: " + nama);

    // Menuliskan ucapan selamat belajar ke halaman
    hasil.textContent = "Selamat belajar JavaScript, " + nama + "!";

    // Menggunakan prompt() agar pengguna mengisi nama kembali
    const namaPrompt = prompt("Masukkan nama Anda sekali lagi:", nama);
    if (namaPrompt !== null && namaPrompt.trim() !== "") {
        console.log("Nama dari prompt(): " + namaPrompt.trim());
    }
});
