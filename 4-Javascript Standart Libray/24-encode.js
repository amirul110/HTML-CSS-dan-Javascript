/* Encoding adalah proses mengganti karakter tertentu dengan bentuk lain agar data dapat dikirim atau disimpan tanpa merusak struktur data.
➡ Tujuan utamanya bukan menyembunyikan, tapi memastikan data tetap utuh dan terbaca oleh sistem.

encodeURI()

🟢 Fungsi: Meng-encode URL, tapi tetap mempertahankan karakter penting URI seperti: ; , / ? : @ & = + $ #
ncodeURIComponent()

encodeURIComponent()

🟢 Fungsi: Meng-encode semua karakter khusus, cocok untuk bagian nilai parameter.


decodeURI()

🔄 Fungsi: Membalik hasil dari encodeURI() ke bentuk semula.

decodeURIComponent()

🔄 Fungsi: Membalik hasil dari encodeURIComponent() ke bentuk aslinya.
*/

const value = "Eko&Kurniawan=Khannedy;";
const url = 'http://www.contoh.com/?name=';

const encoded = encodeURIComponent(value);
console.info(url + encoded); // http://www.contoh.com/?name=Eko%26Kurniawan%3DKhannedy%3B

const decoded = decodeURIComponent(encoded);
console.info(url + decoded); // http://www.contoh.com/?name=Eko&Kurniawan=Khannedy;

const value1 = "??/& & / 20";
const hasilEncodeUri = encodeURI(value1);
console.info("hasil encodeURI :",hasilEncodeUri); // hasil encodeURI : ??/&%20&%20/%2020  

const decoded1 = decodeURI(value1)
console.info("hasil decode value1 :",decoded1) // hasil decode value1 : ??/& & / 20   

const decodedURIComponent = decodeURIComponent("Amirul%20%26%20Budi")
console.info(decodedURIComponent) // Amirul & Budi
