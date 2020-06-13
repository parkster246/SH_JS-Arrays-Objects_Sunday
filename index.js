


// REVIEW: What is an Array?

const books = ['Ariel', 'blink', 'salt', 'crucial conversations', 'Strong Motion', 'At Home']
// ANCHOR: Console log 'Strong Motion' from the books array.


const numbers = [5, 2, 3, [6, 34], 23]
// ANCHOR: Console.log 34 from the numbers array.



// REVIEW: What is an Object?

const people = [
  { name: 'Randall', hobbies: ['listening to music', 'working on his car'], petName: 'Max' },
  { name: 'Stephanie', hobbies: ['gardening', 'surfing'], petName: 'Jafaar' },
  { name: 'Daniel', hobbies: ['writing', 'reading poetry'], petName: 'Monty' }
]
// ANCHOR: Console log Stephanie's pet snake's name
console.log("Stephanie's Snake's Name --> ",)

// ANCHOR: Console log Daniel's second favorite hobby
console.log("Daniel's Second Hobby --> ",)


// REVIEW: What is a function?

// ANCHOR: Create a function called multiply that takes in two parameters: arr and num



// REVIEW: What is a for-loop?

// ANCHOR: Using the function created above, pass in the following arr, an integer, and output the new multiplied array. Use a for-loop!

const multiplyThese = [6, 34, 25, 4, 67, 345, 124, 976]



// TODO: Check if an Array Contains a Given Number
const check1 = [1, 2, 3, 4, 5]
const check2 = [1, 1, 2, 1, 1]
const check3 = [[5, 5, [5], 6], 5]

function check(arr, num) {
  // HINT: If you plan on using the for-loop, "concatenate" the nested arrays

  return arr
}
// console.log('Array Contains Given Number --> ', check(check3, 5))



//TODO: Convert Number to Corresponding Month Name
function monthName(num) {
  return num
}
// console.log('Corresponding Month Name --> ', monthName(2))



//TODO: Add a word ending to every item in array
const strArr1 = ['copy', 'read', 'cook']

function addEnding(arr, str) {
  return arr
}
// console.log('Add Ending --> ', addEnding(strArr1, 'ing'))



//TODO: Find total sum of items in array
const sum1 = [1, 2, 3, 4, 5]
const sum2 = [2, 7, 34, 6, 23, 74, 56, 234, 6747, 3, 12452, 0]

function sumArray(arr) {
  return arr
}
// console.log('Sum of Array --> ', sumArray(sum1))
