let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

 // jawaban No 4 bagian a
let newData = {
    ...data,
    name : "Riki Rhenaldi",
    email : "riki.rhenaldi24@gmail.com",
    hobbies : ["Writing coding","Digital Painting","Read comic"]
}
console.log(newData);

// jawaban No 4 bagian b
const {street, city} = newData.address

console.log(street);
console.log(city);