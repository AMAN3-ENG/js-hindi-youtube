const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batwoman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

marvel_heroes.concat(dc_heroes)

// console.log(marvel_heroes)

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);



const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]


const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
