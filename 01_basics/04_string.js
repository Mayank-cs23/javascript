const name = "Mayank"
const repoCount = 50

console.log(name  +  repoCount + " Value ") // Print
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`) // Print

const GameName = new String("University") // initialize string

console.log(GameName.length) // Shows string's Length
console.log(GameName[0]) // It also shows value of particular indeces
console.log(GameName.charAt(3)) // shows value of index 3
console.log(GameName.indexOf('v')) // shows at which index 'v' is located
console.log(GameName.toUpperCase()) // convert in Uppercase
console.log(GameName.toLowerCase()) // convert in Lowercase

const newString = GameName.substring(0,5) // print Unive
console.log(newString)

const anotherString = GameName.slice(-10,5) // It starts printing +ve index as well as -ve index
console.log(anotherString)

const stringOne = "    Mayank    " // White spaces
console.log(stringOne) // Print string with white spaces
console.log(stringOne.trim()) // Remove white spaces and print

const url = "https://google.com%20Youtube"
console.log(url.replace('%20','-')) // It replace %20 with '-'