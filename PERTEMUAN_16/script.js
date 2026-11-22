// tanpa perulangan
console.log("Belajar perulangan");
console.log("Belajar perulangan");
console.log("Belajar perulangan");
console.log("Belajar perulangan");
console.log("Belajar perulangan");

// perulangan dengan for
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan dengan for: " + i);
}

// perulangan dengan while
let angka = 1;
while (angka <= 5) {
    console.log("Perulangan dengan while: " + angka);
    angka++;
}

// perulangan dengan do while
let x = 6;
do {
    console.log("Perulangan dengan do while: " + x);
    x++;
} while (x <= 5);

// perulangan array dengan for biasa
let mahasiswa = ["Budi", "Agus", "Suci", "Citra"];
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

// perulangan for...of digunakan untuk array
let buah = ["Apel", "Anggur", "Melon", "Semangka"];
for (let item of buah) {
    console.log(item);
}

// perulangan for...in digunakan untuk properti objek
let motor = {
    merek: "Honda",
    model: "Vario",
    warna: "Hitam",
};
for (let data in motor) {
    console.log(data);
}

// perulangan dengan break
for (let y = 1; y <= 10; y++) {
    if (y === 7) {
        break;
    }
    console.log(y);
}

// perulangan dengan continue
for (let z = 1; z <= 10; z++) {
    if (z === 7) {
        continue;
    }
    console.log(z);
}

// contoh kasus untuk menghitung nilai mahasiswa
// web 1 = 90, audit = 80, crm = 100

let nilai = [90, 80, 100, 60, 70];
let totalNilai = 0;

for (let i = 0; i < nilai.length; i++) {
    totalNilai += nilai[i];
}

let rataRata = totalNilai / nilai.length;

// menampilkan output
console.log("Total Nilai: " + totalNilai);
console.log("Rata-rata Nilai: " + rataRata);

// contoh kasus untuk belanja
let barang = ["Baju", "Sepatu", "Tas", "Jam"];
let hargaBarang = [200000, 1400000, 540000, 5000000];

let totalPembelian = 0;

// menampilkan data barang
console.log("===DAFTAR BELANJA===");

for (let i = 0; i < barang.length; i++) {
    console.log(barang[i] + ": Rp." + hargaBarang[i]);
    totalPembelian += hargaBarang[i];
}

// menampilkan total
console.log("==========");
console.log("Total Belanja: " + totalPembelian);

// TABUNGAN MAHASISWA
let saldoAwal = 470000;
let tabunganBulanan = 100000;
let jumlahBulan = 18;

console.log("===SIMULASI TABUNGAN MAHASISWA===");

// menggunakan for
let saldo = saldoAwal;

for (let bulan = 1; bulan <= jumlahBulan; bulan++) {
    saldo = saldo + tabunganBulanan;

    console.log("Bulan ke-" + bulan + " Saldo Rp." + saldo);
}

console.log("Total Tabungan: Rp." + saldo);