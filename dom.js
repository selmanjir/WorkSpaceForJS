console.log(document.getElementById('title')); 

const baslik = document.getElementById('title');

baslik.style.backgroundColor = 'red';

baslik.textContent = 'New title';

baslik.innerText = 'selman';

baslik.innerHTML = '<ul id="liste" class="liste"> <li class="liste-item"> test</li> </ul>';

console.log(document.querySelector('h2'));

console.log(document.querySelector('#test'));

console.log(document.querySelector('li:last-child'));
document.querySelector('li:nth-child(2)').style.color="blue";

document.querySelector("li:nth-child(even)").style.color="purple";
document.querySelector("li:nth-child(odd)").style.color="yellow";