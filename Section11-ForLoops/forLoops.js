// For Loop
// for (starting place; condition; incrementer) {}
for (var i=1; i < 10; i++){ // i++ same to --> i = i = 1
    console.log("Hello number ", i)
}

// For loop with an if condition
for (var i=1; i < 5; i++) { // i++ same to --> i = i = 1
    if ( i == 1) {
        console.log("Hello")
    } else if (i == 2) {
        console.log("Bye")
    } else if (i == 3) {
        console.log("Yo")
    }   else if (i == 4) {
                console.log("See ya!")
            }
        }

// Breaking the for loop
for (var i=1; i < 10; i++){ // i++ same to --> i = i = 1
    if (i == 5) {
        console.log("Adding a breaking point here -->")
        break   // Option to terminate the For Loop
    } else {
        console.log(i)
    }
}

// For loop with an array inside on it
var thing = [1, 2, "hello", "bye"]
for (var i = 0; i < 4; i++) {
    console.log(thing[i])
}

// Activity -> Is gonna fail in the IDE >> Use https://jsconsole.com/ instead
/*
var answer = prompt("Type YES or NO")
var answers = ["YES", "NO"]
var responses = ["You said YES", "You said NO", "You did not follow directions"]

for (i = 0; i < 2; i++) {
    if (answer != answers[0] & answer != answers[1]) {
        console.log(responses[2])
        break
    } else if (answer == answers[i]) {
        console.log(responses[i])
    }    
}
*/

// For loop in a For loop (Called nested loop)
var numbers = [1, 2, 3, 4, 5]
var letters = ["A", "B", "C"]

for (var i = 0; i < 5; i++) {
    console.log(numbers[i])
    for (var t = 0; t < 3; t++) {
        console.log(letters[t])
    }
}

// Activity: The Square
var square = ""
for(var i=0;i<5;i++){
    for(var t=0;t<5;t++){
        square=square + "*"
    }
    square=square + "\n"
}
console.log(square)