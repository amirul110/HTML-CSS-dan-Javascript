const array = ["Eko","Kurniawan","Khanedy"];

array.forEach(function (nilai,indek){
    console.info(`${indek} : ${nilai}`);
})

array.forEach((nilai, indek) => console.info(`${indek} : ${nilai}`)) ;

array.forEach(nilai => console.log(nilai))
