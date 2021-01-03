// const square = function(x){
//     return x*x
// }

// const square = (x)=>{
//     return x*x
// }

// const square = (x) => x*x
// console.log(square(2))

const event1 = {
    name:"Birthday Party",
    guestList:["Andrew","Jen","Mike"],
    printGuestList(){
        console.log("Guest list for " + this.name)
        this.guestList.forEach((x)=>{
            console.log(x+" is attending " + this.name ) // arrow functions don't bind their own this value 
        })                                               // they access this value in the context in which they were created
    }
}

event1.printGuestList()
