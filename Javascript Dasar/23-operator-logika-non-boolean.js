
//operator OR ||
// membaca dari kiri ke kanan,ada nilai true di kiri diambil
console.log("hai" || 0); // hai
console.log("" || {}); // {}
console.log("0" || "NOL"); // 0
console.log(-0 || "NOL"); // NOL
console.info(null || "NULL"); // NULL
console.info(undefined || "UNDEFINED") // UNDEFINED
console.log(0 ||"" || -0); // mengambil terakhir (-0) jika tidak ada nilai true

// OPERATOR AND
/* a && b
// jika a falsy → return a
// jika a truthy → return b
*/
console.log("hello" && ''); // ''
console.info("" && []); // ""
console.log("NULL" && null); // null
console.log("0" && "NOL"); // NOL
console.log(-0 && undefined); // -0
console.log(1.222 && 393.39); // 393.39
