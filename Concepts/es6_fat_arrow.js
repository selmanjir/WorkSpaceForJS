
// Klasik fonsksiyon
function selamVer () {
     console.log("Merhaba");
 }

 selamVer(); 
// Değişkene fonksiyon atama anonymous fonksiyon 
 const selamVerDegisken = function() {
 console.log("merhaba selam ver değişken"); }
 const isim = "Selman";
 selamVerDegisken();

// Yine bir değişkene fonksiyon atamış oldu ayrıca function yazmamıza gerek kalmadı. Eğer parametre listesi boş ise  '()' yerine '_' gibi bir işaret de koyabilir
    const fatArrow = _ => {
    console.log("Merhaba fatArrow"); } 
    fatArrow();


//Klasik 1 paremetre alan fonksiyon
function karesiniAl(sayi) {
    return sayi * sayi ; }
 //Klasiğin değişkene atanmış hali ananymous fonksiyon 
 const karesiniAlDegisken = function (sayi) {     return sayi * sayi; }
 console.log(karesiniAl(5)); console.log(karesiniAlDegisken(7));


// fatArrow kullanarak parametre listeli yani '()' parantezli halii (function yazmamıza gerek kalmadı.) 
const fatArrowParametreli = (sayi) => {     return sayi * sayi; };

 console.log(fatArrowParametreli(8));

//Tek parametreli fonksiyonda parantez ve eğer içerik tek bir satırdan oluşuyor
// ise köşeli parantez kullanımına da gerek duyulmaz tabii ki bu return
// kullanılmasını da engeller.
let sayii = 4;
 const enes = sayi => sayi * sayi;
 enes(3);

console.log(fatArrowParametreli(9));
const sayilariTopla  = (s1,s2) => s1 + s2;

const sayilariTopla2 = (s1,s2) => {
    return s1 + s2;
};
const sayilariTopla3 = function (s1,s2) {
    return s1 + s2;
};

console.log(sayilariTopla(6,12));