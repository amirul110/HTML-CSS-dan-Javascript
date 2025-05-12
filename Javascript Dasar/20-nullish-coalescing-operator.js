let nama =null;

/*
    Jika nilaiKiri null atau undefined → kembalikan nilaiDefault.

    Jika nilaiKiri selain null/undefined (termasuk 0, false, "") → kembalikan nilaiKiri.
*/
let data = nama ?? "Nilai default 123";

console.table(data) // "Nilai default 123" , kembalikan nilai defult

