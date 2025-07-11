// Array
const myArr = [1,2,3,4,5,true,"Mayank"]
console.log(myArr[0]) // Value of 0th index
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[1]) // Value of 1st index
// Array method
console.log(myArr.includes(5)) // Checks includes or not
myArr.push(9) // Push value at the last of the array
console.log(myArr)
myArr.pop() // Remove last element of the array
console.log(myArr)
myArr.unshift(7) // Shift the element at the starting 
console.log(myArr)
myArr.shift() // Remove the starting shifted element
console.log(myArr)
const newArr = myArr.join() // it returns the Array as a String
console.log(newArr)
console.log(typeof newArr) // String
console.log("A",myArr) // O/P : A [ 1, 2, 3, 4, 5, true, 'Mayank' ]
const mynewArr1 = myArr.slice(1,3) // Slice doesn't manipulate original array and print excluding last range
console.log(mynewArr1)
const mynewArr2 = myArr.splice(1,3) // Splice manipulate original array and print including last range
console.log(myArr) // Original array manipulated i.e splice range removed
console.log(mynewArr2)
// Expand array's concept...
const hero = ["Ram","Raj","Rohit"]
const hero2 = ["Kavi","Mohit","Ravi"]
hero.push(hero2) // It returns hero2 as a single element in hero array (Array ke andar Array)
console.log(hero) // O/P : [ 'Ram', 'Raj', 'Rohit', [ 'Kavi', 'Mohit', 'Ravi' ] ]
hero.pop() // Remove pushed element
const allheros = hero.concat(hero2) // concat returns single Array with all element
console.log(allheros) // O/P : [ 'Ram', 'Raj', 'Rohit', 'Kavi', 'Mohit', 'Ravi' ]
const name = "Mayank"
console.log(Array.from(name)) // Array.from returns name as a array like : [ 'M', 'a', 'y', 'a', 'n', 'k' ]
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // Array.of also returns array like : [ 100, 200, 300 ]