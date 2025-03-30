function cariAnakNakalTerbanyak(namaYangDisebut) {
    const frekuensiNama = {};
  
    namaYangDisebut.forEach(nama => {
      if (frekuensiNama[nama]) {
        frekuensiNama[nama]++;
      } else {
        frekuensiNama[nama] = 1;
      }
    });
  
    let frekuensiTertinggi = 0;
    for (let nama in frekuensiNama) {
      if (frekuensiNama[nama] > frekuensiTertinggi) {
        frekuensiTertinggi = frekuensiNama[nama];
      }
    }
  
    const anakNakal = Object.keys(frekuensiNama).filter(nama => frekuensiNama[nama] === frekuensiTertinggi);
    if (frekuensiTertinggi === 1) {
      console.log("Semuanya anak baik");
    } else if (anakNakal.length === 1) {
      console.log(`${anakNakal[0]} Nakal`);
    } else {
      console.log(`${anakNakal.join(" dan ")} Nakal`);
    }
  }
  
  const input1 = [ "Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar" ];
  const input2 = [ "Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar" ];
  const input3 = [ "Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan" ];
  
  cariAnakNakalTerbanyak(input1); 
  cariAnakNakalTerbanyak(input2); 
  cariAnakNakalTerbanyak(input3); 
  