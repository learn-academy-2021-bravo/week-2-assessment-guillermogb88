// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
//start by writing out the test function 
//function will be called numsDivide3
// add arguements that we pass in function 
describe("numsDivide3", () => {
    let num1 = 15
    let num2 = 0
    let num3 = -7
   test("returns if number is divisible by 3", () => {
 
    expect(numsDivide3(num1)).toEqual("15 is divisible by 3"),
    expect(numsDivide3(num2)).toEqual("0 is divisible by 3"),
    expect(numsDivide3(num3)).toEqual("-7 is not divisible by 3")

    

   })
})



var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"





// b) Create the function that makes the test pass.

//creat a loop that will tell me if the numbers are devisible by three 
// const onlydiv3 = (var1) => {
//     let newVr1 =[]
//     for(let i=0); i<var1.length; i++){
//         if(var1[i] % 3 === 0){
//            newVr1.push(var1[i])
//         }
//     }
//     return newVr1
// }
//that didnt work 
// creat else if statements to test out if its divisble by 3
// constant will be numsDivide3
// creat if else function to prove function  
const numsDivide3 = (number) => {
    if(number % 3 === 0){
    return `${number} is divisible by 3`
    }else if(number % 3 !==0){
        return `${number} is not divisible by 3`
    }else{ "not computing"
}
    }

     




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("capital letter", () => {
    // test created with variables for the test to be able to keep the function dynamic 
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    var nounsOutput = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    var nounOutput2 =  ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    
    test("returns the array with the first letter in every string capitalized", () => {
        expect(capitalizer(randomNouns1)).toEqual(nounsOutput)
        expect(capitalizer(randomNouns2)).toEqual(nounOutput2)
    })
})
var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.
// creat a function named capitalizer 
//function capitalizer takes an array as an arguement. 
//returns first letter of each string at each index capitalized 

const capitalizer = (array) => {
    let eachItem = array.map((value, index) => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return eachItem
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//create the describe adding the different variables to make the test dynamic 


describe("first index", () => {
    let vowelTester1 = "learn"
    let vowelTester2 = "academy"
    let vowelTester3 = "challenge"
    let vowelone = 0
    let voweltwo = 1
    let vowelthree = 2

// the test if the vowel tester is going to equal the first index 
    test("return the the index of the first vowel in each string", () => {
        //Variable 1
        expect(firstVIndex(vowelTester1)).toEqual(vowelone)
       //Variable 2
        expect(firstVIndex(vowelTester2)).toEqual(voweltwo)
        //Variable 3
        expect(firstVIndex(vowelTester3)).toEqual(vowelthree)
    })

})

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

//tried to create a new variable as an array to see if it would work this way but still didnt work. 
//let firstVIndex= ['learn', 'academy', 'challenge']

// tried to use filter to make the strings strings into arrays but the test still 
// b) Create the function that makes the test pass.

const firstVIndex = (string) => {
    let array = string.split("")
    console.log(array)
    return array.filter()
}
