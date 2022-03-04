let value;


// spesifik bir ul'ye erişmek için o ul'nin id'sini veya classını belirmeliyiz
const myList = document.querySelector('ul.liste');
console.log(myList);

// listemin içerik sayısını getiri ama bizim listemizde 4 adet li
// olmasına rağmen bize 9 adet sonuç döndürüyor bunun sebebi 
// childNodes'un textleri de sayıyor olması
value = myList.childNodes;

value = myList.childNodes[0].nodeType;
// 1 element
// 3 text
// 8 yorumlar

// 1. elemanın tipini verdi
value = myList.firstChild;
// 1. elemanın içeriğini verdi
value = myList.firstElementChild;

value = myList.lastChild;
value = myList.lastElementChild;

// ul içerisindeki içerik sayısı
value = myList.childElementCount;

// parent element
// ul body içerisinde olduğu için body'i verdi
value = myList.parentNode;
// alternatif
value = myList.parentElement;
// daha yukarı
value = myList.parentElement.parentElement; 

console.log(value); 

const myInput = document.querySelector('input');

console.log(myInput.parentElement);

// querySelector ile ilk eleman geldiği zaman nextElementSibling
// ile bir sonraki elemana geçiş yapabiliriz.
value = document.querySelector('li').nextElementSibling;
// previousElementsSibling bir önceki elemana gitmemizi sağlar.
value = document.querySelector('li').nextElementSibling.previousElementSibling
console.log(value);

