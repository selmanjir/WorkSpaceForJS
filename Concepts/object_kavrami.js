let selman = {

    adi : "Selman Jir",
    soyadi : "CAN",
    dogunYili : 1998,
    evliMi : false,
    sevdigiRenkler : ["Gece mavisi","Siyah"],
    yasiHesapla : function() {
        this.yas =  2022 - this.dogunYili
    }
};

let ardil = {

    adi : "Ardıl",
    soyadi : "ELKAAN",
    dogunYili : 1998,
    evliMi : false,
    sevdigiRenkler : ["Kırmızı","Beyaz"],
    yasiHesapla : function() {
        return  2022 - this.dogunYili
    }
};

console.log(selman);
console.log(selman.dogunYili);
console.log(selman["dogunYili"]);
selman.yasiHesapla();
console.log(selman.yas);
console.log(ardil.yasiHesapla());

let ogrenciler = [selman,ardil];
console.log(ogrenciler[0].adi);

let ezgi = new Object();
