// True or False -> Boolean
var isItReal = true
var isItSpicy = false
var isItString = "true" // Do not confuse. It's a string Var instead of a Boolean one.

// Boolean with IF statementes
var areYouAwake = true
if (areYouAwake){
    console.log("Glad you are awake!")
}

// Activity Truth or Dare (Verdad o Reto)
var answer = prompt("Do you like Cheese? (Y/N)")

if (answer == "Y"){
    isItTrue = true
    console.log("Your answer was " + isItTrue)
} else if (answer == "N") {
    isItTrue = false
    console.log("Your answer was " + isItTrue)
} else {
    console.log("I don't understand you!")
}