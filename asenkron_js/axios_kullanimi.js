const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const ayniAndaIstekBtn = document.getElementById('ayni-anda-istek');
const headerBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');

getBtn.addEventListener('click',getData);
postBtn.addEventListener('click',postData);
putPatchBtn.addEventListener('click',putPatchData);
ayniAndaIstekBtn.addEventListener('click',ayniAndaIstekHata);
headerBtn.addEventListener('click',customHeader);
hataBtn.addEventListener('click',hataIslemleri);

function getData() {
    // axios({
    //     method: 'GET',
    //     url : 'https://jsonplaceholder.typicode.com/users',
    //     params : {
    //         _limit:2
    //     }
    
    // }).then(response => sonucuEkranaYazdir(response))
    // .catch(hata => console.log(hata))
    // .then(() => console.log('get isteği tamamlandı'))
    
    // axios
    // .get('https://jsonplaceholder.typicode.com/users',{
    //     params: {
    //         _limit : 1,
    //     }
    // })
    // .then(response => sonucuEkranaYazdir(response))
    // .catch(hata => console.log(hata))
    // .then(() => console.log('get isteği tamamlandı'))
    axios('https://jsonplaceholder.typicode.com/users?_limit=1')
    .then(response => sonucuEkranaYazdir(response))
    .catch(hata => console.log(hata))
    .then(() => console.log('get isteği tamamlandı'))
}
function postData() {
    //     axios.post('https://jsonplaceholder.typicode.com/posts',{
    //     title: 'Yeni başlık',
    //     body: 'Burası body',
    //     userId: 55
    // }).then(response => sonucuEkranaYazdir(response))
    // .catch(hata => console.log(hata));
    axios.post('https://jsonplaceholder.typicode.com/users',{
    name: 'Selman Jir CAN',
    username: 'selmanjir',
    email:'sjc@gmail.com'
}).then(response => sonucuEkranaYazdir(response))
.catch(hata => console.log(hata))
}
function putPatchData() {
    console.log("put patch data");
}
function ayniAndaIstekHata() {
    console.log("ayni anda istek işlemleri");
}
function customHeader() {
    console.log("custom header olusturma");
}
function hataIslemleri() {
    console.log("hata işlemleri");
}

function hatayiYazdir(error) {
    console.log(error);
    document.querySelector('sonuc').innerHTML=` 
    <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
    <div class="column"><h1 class="subtitle">Sonuc</h1></div>
    <div class="column"><h1 class="title">${error}</h1></div>
    </div>
    </div>`;   
}

function sonucuEkranaYazdir(response) {
    document.querySelector('.sonuc').innerHTML = `<div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
    <div class="column"><h1 class="subtitle">Sonuc</h1></div>
    <div class="column"><h1 class="subtitle">${response.status}</h1></div>
    </div>
    </div>
    
    <div class="section">
    <article class="message is-success">
    <div class="message-header">
    <p>Header</p>
    </div>
    <div class="message-boy has-background-white has-text-dark">
    <pre>${JSON.stringify(response.headers, null, 4)}</pre>
    </div>
    </article>
    </div>
    <div class="section">
    <article class="message is-success">
    <div class="message-header">
    <p>Data</p>
    </div>
    <div class="message-boy has-background-white has-text-dark">
    <pre>${JSON.stringify(response.data, null, 4)}</pre>
    </div>
    </article>
    </div>
    <div class="section">
    <article class="message is-success">
    <div class="message-header">
    <p>Config</p>
    </div>
    <div class="message-boy has-background-white has-text-dark">
    <pre>${JSON.stringify(response.config, null, 4)}</pre>
    </div>
    </article>
    </div>
    
    
    `
}