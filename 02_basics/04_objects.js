const tinderUser = new Object()


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser )

const regularUser = {
    email: "som@gmail.com",
    fullname: {
        username: {
            firstname: "hitesh",
            lastname: "choudhury"
        }
    }
}

console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2 }

const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
]