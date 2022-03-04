console.log("basladı");

ogrencileriGetir(ogrencileriYazdir);

console.log("bitti");

function ogrencileriGetir(callback) {

    setTimeout(() => {
       
        const dizi = [];

        for (let i=0; i < 300; i++) {
            dizi.push({ad: "ogrenci "+ (i+1) , id:i+1});
        }

        callback(dizi);
    }, 3000);
}
function ogrencileriYazdir(ogrenicilerDizisi) {
    console.log(ogrenicilerDizisi);
};  