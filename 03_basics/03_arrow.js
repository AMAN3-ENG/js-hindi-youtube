const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
        
        
    }
}
user.welcomeMessage()
user.username = "sam"  // sam is the conetext
user.welcomeMessage()




// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = ()=> {
    let username = "hitesh"
    console.log(this.username);
    
}

chai()




const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwoo(3, 4));
