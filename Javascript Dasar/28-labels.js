/*
loopi:
for (let i = 0; i < 20; i++){
   loopj:
    for (j = 0; j < 10; j++) { // akan berjalan terus selama bernilai true
        console.log(`${i} - ${j}`);
    }
}
*/

// label berfungsi sebgai nama perulgangan yang bisa digunakan untuk break/continue
/*
| Pernyataan        | Efeknya                                             |
| ----------------- | --------------------------------------------------- |
| `continue looph;` | **Lanjut ke iterasi `h` berikutnya**, skip loop `k` |
| `break looph;`    | **Hentikan seluruh loop `h` dan `k` secara total**  |
| `break;` saja     | Hentikan **loop `k` saja**, lanjutkan `h`           |

*/
looph:
    for(let h = 0; h < 10; h++){
        loopk:
        for (let k = 0; k < 20; k++){
            if (k > 10){ // aat k > 10, loop k dihentikan langsung oleh continue looph;.
                break looph; // berhenti perulangan k langsung lanjut ke perulangan h,nilai h hasil increment sebelumnya
            }
            console.log(`${h} - ${k}`) // last : 9 - 10
        }
    }


