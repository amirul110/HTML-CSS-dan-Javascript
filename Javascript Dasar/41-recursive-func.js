// factorial

function factorial(value) {
    let result =1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(3))

// recursive function

function factorialRecursive(nilai){
    if (nilai === 1){
        return 1;
    } else {
        return nilai * factorialRecursive(nilai -1);
        /*
✅ Rekursi harus tahu hasil dari kondisi paling dasar (base case) terlebih dahulu.

angkah turun ke base case:

    factorialRecursive(3) → butuh tahu hasil dari factorialRecursive(2)

    factorialRecursive(2) → butuh tahu hasil dari factorialRecursive(1)

    factorialRecursive(1) → sudah base case → kembalikan 1

Setelah tahu base case, sekarang naik lagi ke atas:

    factorialRecursive(2) = 2 * factorialRecursive(1)
    = 2 * 1 = 2

    factorialRecursive(3) = 3 * factorialRecursive(2)
    = 3 * 2 = 6
    */
    }
}

console.log(factorialRecursive(3))
