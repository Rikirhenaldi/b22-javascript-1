const matematika = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69 
const mapel= [matematika, bahasaIndonesia, bahasaInggris, ipa]

let averageAndGrade = (p1,p2,p3,p4) =>  {
    let average = (p1+p2+p3+p4)/mapel.length
    console.log(`Rata-rata = ${average}`);
    
    let grade = (i) => {
        if (i >= 90 && i <= 100 ) {
            console.log("Grade = A");    
        }else if (i >= 80 && i <= 89) {
           console.log("Grade = B"); 
        }else if (i >= 70 && i <= 79) {
            console.log("Grade = C"); 
        }else if (i >= 60 && i <= 69) {
            console.log("Grade = D"); 
         }else if (i >= 0 && i <= 59) {
            console.log("Grade = B"); 
         }else{
             console.log("input salah");
         }
    }
    console.log(grade(average));

}

console.log(averageAndGrade(matematika,bahasaIndonesia,bahasaInggris,ipa));
