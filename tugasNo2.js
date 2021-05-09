const matematika = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69 

if (matematika && bahasaIndonesia && bahasaInggris && ipa) {
    let average = (matematika + bahasaIndonesia + bahasaInggris + ipa) /4
    console.log(`Rata-rata = ${average}`);
        if (average >= 90 && average <= 100 ) {
            console.log("Grade = A");    
        }else if (average >= 80 && average <= 89) {
           console.log("Grade = B"); 
        }else if (average >= 70 && average <= 79) {
            console.log("Grade = C"); 
        }else if (average >= 60 && average <= 69) {
            console.log("Grade = D"); 
         }else if (average >= 0 && average <= 59) {
            console.log("Grade = B"); 
         }
    }else {
        console.log('semua nilai harus di isi');
    }
    

