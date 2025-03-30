function fungsiSoal1(dataReview) {
    let nilaiMin = Math.min(...dataReview);
    let nilaiMax = Math.max(...dataReview);
    let ratarata = 0;

    for (let number of dataReview) {
        ratarata += number;
    }
    ratarata = ratarata/dataReview.length;
    console.log("Nilai Terendah: "+nilaiMin);
    console.log("Nilai Tertinggi: "+nilaiMax);
    console.log("Nilai Rata Rata: "+ratarata);
}

const dataReview = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
fungsiSoal1(dataReview);
