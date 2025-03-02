// singleton
//object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",

    [mySym]: "mykey1",

    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)


console.log(JsUser["email"])

console.log(JsUser[mySym])

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());


