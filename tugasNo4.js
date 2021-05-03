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
let newData = {...data}
newData.name = name = "Riki Rhenaldi"
newData.email = email = "riki.rhenaldi24@gmail.com"
newData.hobbies = hobbies = ["Writing coding","Digital Painting","Read comic"]

// jawaban No 4 bagian b
const street = newData.address.street 
const city = newData.address.city

console.log(newData);