// Dates

let myDate = new Date()
console.log(typeof myDate) // object
console.log(myDate.toString()) // Thu Jul 10 2025 06:35:35 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Thu Jul 10 2025
console.log(myDate.toLocaleString()) // 10/7/2025, 6:35:35 am

let createMyDate1 = new Date(2025,6,10) // 10/7/2025, 12:00:00 am
console.log(createMyDate1.toLocaleString())

let createMyDate2 = new Date("2025-06-10") // 10/6/2025, 5:30:00 am
console.log(createMyDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp) // In miliSecond 1752110859429
console.log(Math.floor(myTimeStamp/1000)) // In Second 1752110859