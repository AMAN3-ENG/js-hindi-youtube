// // for of

// ["", "", ""]
// {{}, {}}


// const arr = [1,2,3,4,5,6,7]

// for (const num of arr){
//     console.log(num);
    

// }


// const greetings = "Helloo world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
const myObject = {
    'game1': 'NFS',
    'GAME2': 'Spiderman'
}


//cant iterate the objecty like a map in this way 



// for (const [key, value] of myObject){
//     console.log(key, '=', value);
    
// }