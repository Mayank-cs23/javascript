//****************************************NUMBERS*********************************************************

const score = 400 // By default it shows it is a number
console.log(score)

const balance = new Number(100) // Strictly shows it is a number
console.log(balance)

console.log(balance.toString()) // it converts no. into string
console.log(balance.toString().length) // it shows converted string length
console.log(balance.toFixed(2)) // it gives 2 value after decimal i.e. 100.00

const NumberOne = 10000000
console.log(NumberOne.toLocaleString()) // it give commas like standard value

//******************************************MATHS**********************************************************

console.log(Math.abs(-5)) // It gives absolute (Non -ve) value i.e. 5
console.log(Math.round(4.3)) // It round of the value i.e. 4
console.log(Math.round(4.6)) // i.e. 5
console.log(Math.floor(4.9)) // It gives lower value i.e. 4
console.log(Math.ceil(4.2)) // It gives upper value i.e. 5