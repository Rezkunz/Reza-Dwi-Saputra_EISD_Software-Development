const produk = [
    { nama: "TV", kategori: "elektronik", harga: 1000 },
    { nama: "headphone", kategori: "elektronik", harga: 200 },
    { nama: "baju", kategori: "fashion", harga: 50 },
    { nama: "gitar", kategori: "musik", harga: 300 },
    { nama: "sepatu", kategori: "olahraga", harga: 80 },
    { nama: "kamera", kategori: "elektronik", harga: 600 }
  ];
  
const pelanggan = {
Rina: {
    minat: ["elektronik", "musik"],
    beli: ["TV", "headphone"]
},
Budi: {
    minat: ["fashion", "musik"],
    beli: ["baju", "gitar"]
},
Hartono: {
    minat: ["olahraga", "elektronik"],
    beli: ["sepatu", "kamera"]
}
};

function rekomendasi(namaPelanggan) {
const {minat} = pelanggan[namaPelanggan];

return produk
    .filter(produk => 
    minat.some(kategori => kategori.toLowerCase() === produk.kategori.toLowerCase())
    )
    .map(produk => produk.nama);
}
console.log(rekomendasi("Rina"));     
console.log(rekomendasi("Budi"));     
console.log(rekomendasi("Hartono"));  
