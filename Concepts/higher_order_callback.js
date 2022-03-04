let person = {

    name : "selman",
    age : 24,
    married : false,
};
console.log(person);
console.log(typeof person);
console.log(person instanceof Object);

const fonksiyon = function () {
    console.log(" !");
};

console.log(fonksiyon.toString());

fonksiyon();

console.log(typeof fonksiyon);

let sayi = 5;
const fok = function (sayi) {

    sayi = sayi *2;
    return sayi;
}

console.log(fok(sayi));

let myArray = [1,2,3];

const diziElemanlariniIkiyleCarp = function (array,value) {

    let tempArray = [];
    
    switch (value)
    {
        case "*" :
        for(let i = 0 ; i < array.length; i++) {
            tempArray[i] = array[i]*2;
        }
        console.log(tempArray);
        break;
        case "/" :
        for(let i = 0 ; i < array.length; i++) {
            tempArray[i] = array[i]/2;
        }
        console.log(tempArray);
        break;
        case "+" :
        for(let i = 0 ; i < array.length; i++) {
            tempArray[i] = array[i]+2;
        }
        console.log(tempArray);
        break;
        case "-" :
        for(let i = 0 ; i < array.length; i++) {
            tempArray[i] = array[i]-2;
        }
        console.log(tempArray);
        break;
    }
}
diziElemanlariniIkiyleCarp(myArray,"-");
console.log(myArray.toString()); 


//CONSOLE CLEAR !!!
console.clear();
function adimiSoyle(ad,soyad) {

    console.log(ad + " " + soyad)
}
adimiSoyle("Selman Jir", "CAN");

function adimiBagir(ad, soyad, callback) {

    const mesaj = ad.toUpperCase() + " " + soyad.toUpperCase();
    callback(mesaj);
}
adimiBagir("Selman Jir", "CAN", mesajGoster);

function mesajGoster(mesaj) {

    console.log(mesaj);
}