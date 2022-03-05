const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const deleteBtn = document.getElementById('delete');
const ayniAndaIstekBtn = document.getElementById('ayni-anda-istek');
const headerBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');

getBtn.addEventListener('click',getData);
postBtn.addEventListener('click',postData);
putPatchBtn.addEventListener('click',putPatchData);
deleteBtn.addEventListener('click',deleteItem);
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

    //     // PUT seçilen id deki bütün içeriği siler yeni bir içerik üretir
    //     axios.put('https://jsonplaceholder.typicode.com/users/1',{
    //     name:'Selman Jir CAN',
    //     userName : 'selmanjir',
    //     email :'random@gmail.com'
    // }).then(response => sonucuEkranaYazdir(response))
    // .catch(hata => console.log(hata))
    axios.patch('https://jsonplaceholder.typicode.com/users/1',{
        name:'Selman Jir CAN',
        userName :'selmanjir',
        email :'random@gmail.com'
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
}
function deleteItem(){
    axios.delete('https://jsonplaceholder.typicode.com/users/1')
        .then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
}
function ayniAndaIstekHata() {
    // axios.all([
    //     get('https://jsonplaceholder.typicode.com/users'),
    //     get('https://jsonplaceholder.typicode.com/posts')
    // ]).then(response => {
    //     console.log(response[0].data)
    //     console.log(response[1].data)
    //     sonucuEkranaYazdir(response[0])
    // })
    axios.all([
        get('https://jsonplaceholder.typicode.com/users'),
        get('https://jsonplaceholder.typicode.com/posts')
    ]).then(axios.spread((kullanıcılar,postlar) =>{
        console.log(kullanıcılar.data);
        console.log(postlar.data);
        sonucuEkranaYazdir(kullanıcılar)
    }))
}
// interceptors istek henüz gitmeden çalışmasını istediğimiz blok

axios.interceptors.request.use(config => {
    console.log(`${config.url} adresine ${config.method} istediği yapıldı ve timeout olarak ${config.timeout} ayarlandı`);

    return config;
});

// axios için default değeri tanımlama.
axios.defaults.headers.common['X-Auth-Token'] = 'apitokendegeri';
axios.defaults.headers.common['MyToken'] = 'mytoken';

// heryerde kullanabilceğim default değerleri olan axios nesnesi.
const myAxios = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers : {'X-Requested-Width' : 'XMLHttpRequest', 'token' : 'anotherDefaultToken'}
})

// Yetkilendirme için ayrılmış alan
function customHeader() {

    myAxios.get('/users').then(response => console.log(response));

    const config = {

        headers: {
            'Content-Type' : 'application.json',
            Authorization: 'sizintokendegeriniz'
        }

    }

    axios.post('https://jsonplaceholder.typicode.com/users',{
        name: 'Selman Jir CAN',
        username: 'selmanjir',
        email:'sjc@gmail.com'
    },config).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
}
function hataIslemleri() {
    axios('https://jsonplaceholder.typicode.com/userssss?_limit=1')
        .then(response => sonucuEkranaYazdir(response))
        .catch(hata => hatayiYazdir(hata))
        .then(() => console.log('get istediği tamamlandı'))
}

function hatayiYazdir(hata) {

    document.querySelector('.sonuc').innerHTML = ` <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
    <div class="column"><h1 class="subtitle">Sonuc</h1></div>
    <div class="column"><h1 class="title>
    <pre>${JSON.stringify(hata.response.headers, null, 2)}</pre>
    </h1></div>
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