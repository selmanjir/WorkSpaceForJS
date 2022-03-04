// console.log(document.getElementById('baslik').className); 

// const baslik = document.getElementById('baslik');

// // change style

// baslik.style.backgroundColor = 'red';
// baslik.style.color = 'white';
// baslik.style.padding = '2rem';

// // içerik
// baslik.textContent = 'Bu yeni başlık';

// const test = baslik.textContent;

// console.log(test);


// // innerText = string değeri değiştirir. Bu sebeple imgin pathine erişeceğiz.
// baslik.innerText = '<img src="https://source.unsplash.com/100x100" alt="">';

// // innerHTML = html kodunu algılar imgyi bize verir.
// baslik.innerHTML = '<img src="https://source.unsplash.com/100x100" alt="">';

// //querySelector html veya text olarak değilde bizim içeriğimize göre veri getiren sorgu.
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('#liste')); //id çağırılınca # (diyez kullanılır.)
// console.log(document.querySelector('.liste-item')); // sınıf çağılınca . kullanılır. birden
// // fazla eleman olsa bile querySelector bize ilk içeriği seçip getirir yani 1 resultu vardır.

// const myList = document.querySelector('li'); // bütün 'li' leri seçtik. 
// myList.style.color = 'blue'; // querySelector bütün 'li' leri gezip ilk verinin rengini 
// //değiştirdi.

// document.querySelector('li:last-child').style.color = 'yellow'; // Burada 'li' leri gezip 
// // last-child kullanımı sayesinde sonuncu elamana erişimimizi sağladı.

// document.querySelector('li:nth-child(2)').style.color = 'orange'; // Burada 'li' leri gezip 
// // nth-child(2) kullanımı sayesinde 2. elamana erişimimizi sağladı.

// document.querySelector('li:nth-child(odd)').style.color = 'teal'; // Burada 'li' leri gezip 
// // nth-child(odd) kullanımı sayesinde ilk gördüğü tekli elamana erişimimizi sağladı. 
// document.querySelector('li:nth-child(even)').style.color = 'black';// Burada 'li' leri gezip 
// // nth-child(odd) kullanımı sayesinde çiftli gördüğü tekli elamana erişimimizi sağladı.  


const links = document.getElementsByClassName('link');

console.log(links); // bütün class isimlerini getirir
console.log(links[0]); // indexi seçili classın içeriğini getirir.
console.log(links[1]);
console.log(links[2]);

links[0].style.color = 'red';

// önce ul'yi bul devamında bu ul'deki liste-item classında olanları getir
console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

const dizi = Array.from(links); // links içeriğinden bir dizi oluşturdu.

dizi.reverse(); // reverse ilgili listeyi ters çevirir.
dizi.forEach(item => {
    console.log(item);
} );
// tag'a göre bütün elemanları getirir.
const listeElemanlarim = document.getElementsByTagName('li');
console.log(listeElemanlarim);

// yine tag'a göre hepsi
const linkListesi = document.querySelectorAll('a');
console.log(linkListesi); 

// li sırası tek olanlar
const sehirlerTek = document.querySelectorAll('li:nth-child(odd)');
// li sırası çift olanlar
const sehirlerCift = document.querySelectorAll('li:nth-child(even)')

// tek olanları gez arkaplan renkleri değiştir.
sehirlerTek.forEach(item => {
    item.style.backgroundColor = '#ccc';

});
// çift olanları gez arkaplan ren
for(let i = 0; i < sehirlerCift.length;i++) {
    sehirlerCift[i].style.backgroundColor = '#eee';
};

