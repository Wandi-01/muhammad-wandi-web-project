function hitungTotal() {
    const nama = document.getElementById("nama").value.trim();
    const totalBelanja = document.getElementById("belanja").value;
    const hasil = document.getElementById("hasil");

    if (nama === "" || totalBelanja === "") {
        alert("Nama pembeli dan total belanja harus diisi!");
        return;
    }

    const belanja = Number(totalBelanja);

    if (belanja < 0 || !Number.isFinite(belanja)) {
        alert("Total belanja harus berupa angka yang valid dan tidak boleh kurang dari 0!");
        return;
    }

    let diskon;

    if (belanja >= 500000) {
        diskon = 20;
    } else if (belanja >= 300000) {
        diskon = 15;
    } else if (belanja >= 100000) {
        diskon = 10;
    } else {
        diskon = 0;
    }

    const potongan = belanja * diskon / 100;
    const totalBayar = belanja - potongan;

    const formatRupiah = (angka) => {
        return angka.toLocaleString("id-ID");
    };

    hasil.innerHTML =
        "Nama Pembeli: " + nama + "<br>" +
        "Total Belanja: Rp " + formatRupiah(belanja) + "<br>" +
        "Diskon: " + diskon + "%<br>" +
        "Potongan: Rp " + formatRupiah(potongan) + "<br>" +
        "Total Bayar: Rp " + formatRupiah(totalBayar);
}