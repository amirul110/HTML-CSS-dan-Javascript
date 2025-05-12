let buku = 1;

while(true) {
    console.log(`Perulangan ke ${buku}`);
    buku++;

    if (buku > 10) {
            console.log(`Perulangan ke ${buku} PERULANGAN BERHENTI BREAK`)

        break; // JIKA kondisi terpenuhi maka
    }

    
}

for (let i = 1; i <= 10; i++){
    if (i % 2 === 0) {
        continue; // di skip jika modulo 2 ===0 langsung ke i++
    }
    console.log(`Perulangan Ganjil ${i}`)
}
