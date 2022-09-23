// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


// Pseudocode: 
  // Declare a describe method that lists the name of the function called upName
  // Nested within the describe method, will be an it/test method which describes the function "it will take an array of objects and return an array with a sentence about each person with their name capitalized"
  // Nested within the it/test method, will be an expects method which will call on the toUpperCaseString function, followed by .toEqual method the expected output that will check the expected output of the function toUpperCaseString

describe("upName", () => {
  it("it will take an array of objects and return an array with a sentence about each person with their name capitalized", () => {
    expect(upName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
 
// red of red-green refactor: 
  // FAIL  ./code-challenges.test.js
  // toUpperCase

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
//pseudocode: 
// declare a function named upName
// iterate through the array using .map to uppercase the value of the key name:
  // set this code ^^into a variable named upCase to be called upon later 
// call to upCase and iterate through upCase using .map to access the values of :name and :occupation 
// return a string, using string interpolation 


// const upName = (array) => {
//   const upCase = array.map((value) => value.name.split(" "))
//   return upCase.map((string) => string.charAt(0).toUpperCase() + string.slice(1).join(" "))
// }

//  Above is my first attempt to try and first make the first letter in the name uppercase but it seems to not work because the .charAt has an error saying it is not a function - I know .chartAt is a method is used to locate the character at a certain index in a string and I think the issue is that I am trying to use charAt while it is still an array 


// const upName = (array) => {
//   array.map((object) => {
//   // const upCase = array.map((value) => value.name.split(" "))
//   // const firstName = upCase[0][0].toUpperCase().charAt(0) + upCase[0][0].slice(1)
//   // const lastName = upCase[0][1].toUpperCase().charAt(0) + upCase[0][1].slice(1)
//   // return ` ${firstName} ${lastName} is ${object.occupation}`
//   console.log(object.name.split(" ").charAt(0).toUpperCase())
// })

  
  // console.log(upCase[0][0].toUpperCase().charAt(0) + upCase[0][0].slice(1))
  // console.log(upCase[0][1].toUpperCase().charAt(0) + upCase[0][1].slice(1))
  // return upCase.map((value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())


// lines above was working through with Charlean where we were breaking down how we can access the values when the value we needed was within an nested array. This helped me understand the small steps needed to get to the value of the name and how we could get the first letter of name and have it captialized. However, my issue with the code above is that it would get repetitive, as I would need to find a way to create a variable for each object's first name and last name (at their index) so that I can call upon it in my string interpolation. 

// So by taking in my learnings from talking to charlean, I knew I needed to do the following psuedocode: 

  // declare a function named upName
    // iterate through the array using .map and use dot notation to access the values of name and use split(" ") to separate out the name from the object and to have first and last name in 2 different strings.
      // Once you have access to the separate strings - iterate through the strings and use charAt(0) to point to the 0 index element and use .toUpperCase to upcase that 0 index
      // To add the rest of the name back on, we must use slice(1) 
      // use join(" ") to join the first name and last name into one string
      // using string interpolation add the rest of the sentence using dot notation to access value of occupation key 


const upName = (array) => {
 return array.map(value => value.name.split(" ").map(fullName => fullName.charAt(0).toUpperCase() + fullName.slice(1)).join(" ") + ` is ${value.occupation}.`

  )
}


// I think the reason why previous code didn't work the first time was because I was storing the first map iteration in a variable and so when I called to that variable - it was still an array. This meant that I wasn't able to use any string methods on my return because I couldn't acces the string inside. By doing the code execution on one line, array.map(value => value.name.split(" ") allows me to access the values and split them into separate strings and then the function to the right of the arrow (fullName.charAt(0).toUpperCase() + fullName.slice(1)).join(" ") + ` is ${value.occupation}.`) allows me to perform iterations and use the different string methods on the values that have already been accessed. 


// green of green-red refactor: 
  // PASS  ./code-challenges.test.js
  // upName


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Pseudocode: 
  // describe a method that lists the name of function called remainderArr 
  // nested within the describe block, have a test/it method that describes what the function does "It will take an a mixed data array and return an array of only the remainder of the numbers when divided by 3"
  // nested in the test block, have an expect method that is calling the function remainderArr have an expect method followed by the .toEqual() method matcher that will check the expected output of the function 

describe("remainderArr", () => {
  it("It will take an a mixed data array and return an array of only the remainder of the numbers when divided by 3", () => {
    expect(remainderArr(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]),
    expect(remainderArr(hodgepodge2)).toEqual([2, 1, -1])

  })
})

// red of red-green refactor: 
  //  FAIL  ./code-challenges.test.js
  // ReferenceError: remainderArr is not defined



const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Pseudocode: 
  // declare a function named remainderArr 
  // set a new variable to hold: 
    // iterate through array using filter method to locate only numbers (typeof?)
  // return the variable set and use .map method to iterate through array of only numbers and use modulo operator % 3 so we can return the remainder 

  const remainderArr = (array) => {
    const numArr = array.filter((value) => typeof value === "number")
    return numArr.map((value) => value % 3)

  }


// console.log(remainderArr(hodgepodge1))
// output: [ 2, 0, -1, 0 ]
// console.log(remainderArr(hodgepodge2))
// output: [ 2, 1, -1 ]


// green of red-green refactor: 
  //  PASS  ./code-challenges.test.js

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// pseudocode: 
// describe method that names the function totalSum 
// within describe method, have an it/test block that will describe what the function will do "It will take an array of numbers and cube the value and then add the sum"
// nested in the test block, have an expect method that is calling the function totalSum have an expect method followed by the .toEqual() method matcher that will check the expected output of the function 

describe("totalSum", () => {
  it("It will take an array of numbers and return the sum of all the numbers cubed", () => {
    expect(totalSum(cubeAndSum1)).toEqual(99)
    expect(totalSum(cubeAndSum2)).toEqual(1125)
  })
})


//  red of red-green refactor: 
  // FAIL  ./code-challenges.test.js


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Psuedocode:
// declare a function named totalSum
// iterate through the array to cube all values, can use .map to iterate through array and return a new array with values cubed
    // set this ^^^ code execution to a variable named toCube
// return toCube and iterate through the array using .reduce to take the value and add it to the next value 
  // .reduce is an iteration that is used to reduce the array to only one value 

const totalSum = (array) => {
  const toCube = array.map((value) => value ** 3)
  let sum = 0
  return toCube.reduce((previousValue, currentValue) => previousValue + currentValue, sum)

}
 
// console.log(totalSum(cubeAndSum1))
// console.log(totalSum(cubeAndSum2))

// green of red-green refactor: 
  //  PASS  ./code-challenges.test.js
  // totalSum

// notes: 
  // For this question, my blocker was finding a way to add all the values in the array together. Through research, I learned of a new iteration method called .reduce() which allows you to iterate through the array and only returns a single value: the function's accumulated result. 
  // syntax needed for this method is: 
    // array.reduce((previousValue, currentValue) =>
  // by being able to use .reduce, I can create a function that takes the previousValue and add it to the current value
  // The reason I created a variable named num and set it to 0 is because, I want the addition to start at 0 - this way we can add the first value to 0, and then continue adding the other values to that sum. 