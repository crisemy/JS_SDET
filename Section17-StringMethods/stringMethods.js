var thing = "Hello, world!"

// Lenght of a string
console.log(thing.length)

var sentense = "I say yes, you say no"

// First occurrence of string
console.log(sentense.indexOf("yes"))

// Last occurrence of string
console.log(sentense.lastIndexOf("I"))

// If condition to know wheter a string condition occurrs or not
if (sentense.indexOf('no') > 0)
    console.log("It isn't there")
else
    console.log(sentense.indexOf)

// Search something
sentense.search("yes")

// 74. Taking a slice or substring or substr (substr is depracated so I won't use it)
var str = "Happy, Excited, Calm"

// Goes from 1 char to the char we would like
var sl = str.slice(7,14)
console.log(sl)

// From the 7th value to the end
sl = str.slice(7)
console.log(sl)
// From the end to a specific place (backwords)
sl = str.slice(-13, -6)
console.log(sl)

// Substring. Remember that with Substrings you cannot add negative indexes
var sb = str.substring(7, 14) // Quite similar to the Slide functionality

// 75. Replacing Content
var str = "I have turkey for lunch and turkey for dinner"
var lunch = str.replace("turkey", "pasta") // Replaces the 1st value 'Turkey' for the 2nd Value 'Pasta'
// Doesn't replace the other 'Turkey' Value
console.log(lunch)

// If I wanted to change the both of those 'Turkey' words
lunch = str.replace(/turkey/g, "pasta") // g as 'global'. Meaning that the entire chain will be modified
console.log(lunch)

// 76. Convert to upper-lower and trimming
var word = " I'm Happy and I know it!  "
console.log(word)
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(word.trim()) // Takes spaces off. There's a trim after and before option as well

// 77. Converting a string to an array
var str = "1,2,3,4,5"
console.log(str.split(",")) // Takes 'commas' off

var str2 = "1 2 3 4   5"
console.log(str.split(" ")) // Takes spaces off

var str3 = "I have a dog"
console.log(str3.split(" ")) // Splits every word with a 'comma'

// 78. Converting a string into a number. Needs to be all numbers w/o chars in there.
// Otherwise it will throw an exception
var num = "5"
console.log(Number(num))

var numInt = "5.6334"
console.log(parseInt(numInt))
console.log(parseFloat(numInt))