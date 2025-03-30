function hitungKembalian(totalPembayaran, totalBelanja) {
    const pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

    let kembalian = totalPembayaran - totalBelanja;
    let hasil = {};
  
    pecahan.forEach(nilai => {
      if (kembalian >= nilai) {
        let jumlah = Math.floor(kembalian / nilai);  
        hasil[nilai] = jumlah;  
        kembalian -= jumlah * nilai;  
      }
    });
  
    return hasil;  
  }
  
  console.log(hitungKembalian(10000, 7500));  
  console.log(hitungKembalian(5000, 1100));   
  console.log(hitungKembalian(178000, 90500)); 
  