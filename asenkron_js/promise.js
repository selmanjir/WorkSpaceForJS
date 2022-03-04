// const myPromise = new Promise ((resolve, reject) => {

//     // uzun sürecek işlem
//      setTimeout(() => {

//         // döndürmek istediğimiz sonuc
//         resolve("3 saniyelik işlem bitti");
//         // hata durumunda
//         reject("internerte çıkamadım.");
//      }, 3000);    
// });


// myPromise
// // Hatasız bir durumda çalışır durumda  
// .then(sonuc => {console.log(sonuc);})
// // hata durumunda
// .catch(hata =>{console.log.apply(hata)})  

// function ogrencileriGetir () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             const dizi = [];

//             for (let i=0; i < 30; i++) {
//                 dizi.push({ad: "ogrenci "+ (i+1) , id:i+1});
//             }

//              //resolve(dizi);
//              // Hata çıkarsa
//             reject("Error")
//         }, 2000);
//     })
// }
// function ogrencilerirYazdir(dizi) {
//     console.log(dizi);
// }

// ogrencileriGetir().then(ogrenciDizisi => {ogrencilerirYazdir(ogrenciDizisi)});
// ogrencileriGetir().catch(hataMesaji => console.log(hataMesaji));


// const promiseBasarili = Promise.resolve("Başarılı");
// const promiseHata = Promise.reject("Hata");

// promiseBasarili
// .then(sonuc => console.log(sonuc));
// promiseHata
// .then(sonuc => console.log(sonuc))
// .catch(hata => console.log(hata));

const p1 = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve("3 saniyelik işlem bitti");
    }, 3000);

});
const p2 = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        resolve("6 saniyelik işlem bitti");
    }, 6000);

});
// Promise all bir dizi olarak promise lerinizi bekliyor
// Promise içerideki promiselerin süresinin bitmesi bekleyip hepsini 
// // birlikte yollar.
// Promise
// .all([p1, p2])
// .then(sonuc => console.log(sonuc));

// Promise race ise promise all dan farklı olarak hangi promise daha önce 
// biter sonuca onu veriyor.
Promise.race([p1, p2]).then(sonuc => console.log(sonuc));
