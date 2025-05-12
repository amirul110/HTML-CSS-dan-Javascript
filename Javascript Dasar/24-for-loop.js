/* 
    "counter = 1 dan dicek kondisi 1 <= 10 bernilai benar. Nah selanjutnya cetak 'Perulangan ke 1' dulu atau 1+1 karena hasil increment?"

✅ Jawaban: Cetak 'Perulangan ke 1' dulu, baru lakukan counter++.

Urutannya:

    counter = 1

    Cek: 1 <= 10 → benar

    Jalankan console.log('Perulangan ke 1')

    counter++ → sekarang counter = 2
}

 Kapan digunakan?

    Ketika jumlah perulangan sudah diketahui.

    Perulangan yang memiliki nilai awal, kondisi, dan increment dalam satu baris.
    
*/

                    // jika kondisi bernilai false maka tidak ada perulangan
for (let counter = 1; counter <= 10; counter++){
    console.log(`Perulangan ke ${counter}`);
  
}
