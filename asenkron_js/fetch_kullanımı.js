const btntextGetir = document.getElementById('btn-text-getir');
const btnJsonGetir = document.getElementById('btn-json-getir');
const btnApidenJSONGetir = document.getElementById('btn-api-json-getir')
const btnJSONVeriEkle = document.getElementById('btn-json-veri-ekle');

btntextGetir.addEventListener('click',getText);
btnJsonGetir.addEventListener('click',getJSON);
btnApidenJSONGetir.addEventListener('click',getJSONFromApi);
btnJSONVeriEkle.addEventListener('click',jsonVeriEkle);

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

};

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

function getJSONFromApi(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(sonuc => ekranaYazdir(sonuc)); 
}


function ekranaYazdir(data) {
    let cikti = '';
    data.map(user => {
        cikti += `<li>${user.name}</li>`
    });
    sonucDiv.innerHTML = cikti;
}

// function jsonVeriEkle(e) {
//     e.preventDefault();

//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'deneme',
//             body: 'body alanı',
//             userId: 5
//          }),
//         headers: {'Content-type':'application/json'}
//     })
//         .then(response => response.json())
//         .then(sonuc => console.log(sonuc))
// } 
async function jsonVeriEkle(e) {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı',
            userId: 5
         }),
        headers: {'Content-type':'application/json'}
    })
    const sonuc = await response.json();
    console.log(sonuc);
} 