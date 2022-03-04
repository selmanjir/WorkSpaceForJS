// yeniListeElemanı değişkeni li tipinde tanımlandı
const yeniListeElemanı = document.createElement('li');

// değişkenimize class atadık.
yeniListeElemanı.className='liste-item';
// değişkenimize içerik girdik
yeniListeElemanı.textContent = 'Yozgat';
// değişkenimize id verdik.
yeniListeElemanı.id = 'yeni-id';
// değişkenimize özellik verdik.
yeniListeElemanı.setAttribute('deger','yeni değer'); 
// sayfamızda eklek istediğimiz yeri bulduk ve appendChild ile en sona ekledik.
document.querySelector('ul').appendChild(yeniListeElemanı);

// replace
// h6 tipinde bir değişken tanımladık.
const yeniBaslikKucuk =document.createElement('h6');
// yeni değişkene id verdik.
yeniBaslikKucuk.id = 'Test';
// değişkene içerik girdik.
yeniBaslikKucuk.textContent = 'Test';

// sayfa da mevcut olan başlığı değişkene atadık.
const eskiBaslik = document.querySelector('h2');
// parenti bulup değişkkene atatık
const baslikParent = document.querySelector('body');
// parente atadığımız değişkene replaceChild methodu sayesinde yukarıdaki
// 2 başlığı değiştirdik.
baslikParent.replaceChild(yeniBaslikKucuk,eskiBaslik); 

// remove
const listeItem = document.querySelector('li:nth-child(5)');
//listeItem.remove();

document.querySelector('ul').removeChild(document.querySelectorAll('li')[0]);


console.log(listeItem);