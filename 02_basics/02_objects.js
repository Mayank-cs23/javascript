//Objects
const jsUser = {
    name : "Mayank",
    "full name" : "Mayank kumar",
    age : 18,
    location : "Bihar",
    email : "mayank123@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday","Friday"]
}
console.log(jsUser.email) // we can also access this type
console.log(jsUser)
jsUser.email = "Mayank4460@gmail.com" // Change value
Object.freeze(jsUser) // Nothing change after it
jsUser.name = "Rohan"
console.log(jsUser)

// Objects in depth...
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Mayank"
tinderUser.age = 18
tinderUser.isLoggedIn = false
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // Keys are Returned in an Array format
console.log(Object.values(tinderUser)) // Same like keys
console.log(Object.entries(tinderUser)) // It returns Array under Array with single key-value pair

const regularUser = {
    email : "Mayank99@gmail.com",
    fullName : {
        userName : {
            firstName : "Mayank",
            lastName : "Kumar"
        }
    }
}
console.log(regularUser.fullName)

const obj1 = {1:'A',2:'B'}
const obj2 = {3:'C',4:'D'}
const obj3 = Object.assign(obj1,obj2) // Combined obj1 and obj2 in obj3
const obj4 = {...obj1,...obj2} // Spread method, we'll mostly use it!
console.log(obj3)
console.log(obj4)