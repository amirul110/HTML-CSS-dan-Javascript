const ikiajax = new XMLHttpRequest();
ikiajax.open('GET', 'api/hello.json');
// ajax.open('GET', 'http://localhost:8080/api/helllo.json');

ikiajax.send();

/*
AJAX (Asynchronous JavaScript and XML) adalah teknik untuk mengambil atau mengirim data ke server di belakang layar
(tanpa me-refresh halaman web).
 */
