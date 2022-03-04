const btntextGetir = document.getElementById('btn-text-getir');
const btnJsonGetir = document.getElementById('btn-json-getir');

btntextGetir.addEventListener('click',getText);
btnJsonGetir.addEventListener('click',getJSON);

const sonucDiv = document.getElementById('sonuc');

function getJSON(e) {

e.preventDefault();

fetch('ogrenciler.json')
.then(response => response.json())
.then(sonuc => { 
    let cikti =''; 
    sonuc.map
    sonuc.map(ogr => {
        
        cikti += `ogrenci adi : ${ogr.ad} id : ${ogr.id}} \n` 
    })
    sonucDiv.innerText =cikti;
});

}

function getText(e) {
     e.preventDefault();

    //  const fetchSonuc = fetch('test.txt');
    //  fetchSonuc.then((response) => {
    //     const responseText = response.text();
    //     responseText.then(sonuc => {
    //         console.log(sonuc);
    //     })

    //  })
    fetch('test.txt')
    .then(response => response.text())
    .then(sonuc => sonucDiv.innerText=sonuc)
    .catch(hata => console.log(hata)); 
 };