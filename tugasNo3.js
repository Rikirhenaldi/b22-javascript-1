let segitiga = (num) => {
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
    return str
}
console.log(segitiga(5));