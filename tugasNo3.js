let printSegitiga = (num) => {
    if (typeof num === "number") {
        let str = ""
        for (let x = 0; x <= num; x++) { //looping for pertama
            for (let y = 0; y < num; y++) { // looping for ke dua
                if(x + y >= num){
                    str = str.concat(" "); // untuk mencetak spasi dari looping for kedua
                }else{
                    str = str.concat(`${y + 1}`) //untuk mencetak angka dari looping kedua
                }
            }
            str = str.concat("\n") // untuk mencetak enter dari looping for pertama
        }
        console.log(str);
    }else{
        console.log('input harus number');
    } 
    }
printSegitiga(5)

let printSegitiga1 = 5
    if (typeof printSegitiga1 === "number") {
        let str = ""
        for (let x = 0; x <= printSegitiga1; x++) { //looping for pertama
            for (let y = 0; y < printSegitiga1; y++) { // looping for ke dua
                if(x + y >= printSegitiga1){
                    str = str.concat(" "); // untuk mencetak spasi dari looping for kedua
                }else{
                    str = str.concat(` ${y + 1}`) //untuk mencetak angka dari looping kedua
                }
            }
            str = str.concat("\n") // untuk mencetak enter dari looping for pertama
        }
        console.log(str);
    }else{
        console.log('input harus number');
    } 
