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