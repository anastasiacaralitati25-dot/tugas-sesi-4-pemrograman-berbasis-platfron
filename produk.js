// Data produk awal
let namaProduk = "Mouse Wireless";
let hargaAwal = 150000;
let stok = 3;

// Menampilkan informasi produk awal
console.log(namaProduk);
"console.log(Harga: Rp${hargaAwal});"
"console.log(Stok tersedia: ${stok});"
console.log("-----------------------------");

// Logika Diskon
let persentaseDiskon = 0.10; // 10% diskon
let hargaSetelahDiskon = hargaAwal - (hargaAwal * persentaseDiskon);
"console.log(Harga setelah diskon: Rp${hargaSetelahDiskon});"
console.log("-----------------------------");

// Fungsi Pembelian
function beliProduk(jumlahBeli) {
    if (stok >= jumlahBeli) {
        stok -= jumlahBeli;
        "console.log(Pembelian berhasil! Anda membeli ${jumlahBeli} ${namaProduk}.);"
        "console.log(Sisa stok sekarang: ${stok});"

        // Cek jika stok habis setelah pembelian
        if (stok === 0) {
            "console.log(Stok produk kini habis, segera restock!);"
        }
    } else {
        // Jika stok tidak cukup
        "console.log(Maaf, stok produk tidak cukup / sudah habis!);"
    }
    console.log("-----------------------------");
}

// Simulasi Pembelian
beliProduk(1);
beliProduk(2);
beliProduk(1);