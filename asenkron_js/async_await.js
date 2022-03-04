function getUser(id) {

    console.log(`${id} idli kullanıcının bilgisi getiriliyor.` );

     return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            resolve({ad : "Selman", id : id});
        }, 2000);
        
    });

    }
function getCourse(userName) {

    console.log(`${userName} isimli kullanıcının kursları getiriliyor.` );
    return new Promise((resolve, reject) => {
       
    setTimeout(() => {
        
        //reject("kurslar getiriliken hata çıktı")
        resolve(['java', 'javasript', '.net' ]);
    }, 2000); 
    });

}
    function getComments(kursAdi) {
        console.log(`${kursAdi} isimli kursun yorumları getiriliyor.` );
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            
                resolve('Kurs Harika');
            }, 2000); 
            });
    }


// getUser(1224)
//     .then(user => getCourse(user.ad))
//     .then(kurslarDizisi => getComments(kurslarDizisi[0]))
//     .then(yorum => console.log(yorum))
//     .catch(hata => console.log("hata çıktısı : " + hata));



    // await satırdaki iş bitmeden bir alt satıra geçmiyorç
 async function yorumlarıGoster() {

    await function yorumlarıGoster () {
        try {
            const userObje = await getCourse(5498);
        const kurslarDizisi = await getUser(userObje.ad);
        const yorum = await getComments(kurslarDizisi[0]);
        console.log(yorum);
        } catch(err) {
            console.log("hata çıktı"+ err);
        }
    }


 }   
// getUser(1234).then( user => { 
//     getCourse(user.ad).then(kurslarDizisi => {
//             getComments(kurslarDizisi[0]).then(yorum => {
//                 console.log(yorum);
//             });
            
//         });
//     });

    // getCourse('selman')
    // .then(kurslarDizisi => {
    //     console.log(kurslarDizisi); 
    // })
