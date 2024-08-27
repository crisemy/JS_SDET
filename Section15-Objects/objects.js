// Objects in JS
var person = {
    firstName: "Cris", // Property for this Object
    favColor: "Blue",
    isMarried: true, // A boolean property
    kidsName: ["Toby", "Anita"], // An array property
    thing: {
        // An Object Property
        name: "Object",
        color: "Yellow",
    },
};

// Ganning access to those Object values
console.log(person.firstName);
console.log(person.thing.name);

// Activity: Family Tree
var family = {
    father: {
        firstName: "Thomas",
        lastName: "Wayne",
        isAlive: false
    },
    mother: {
        firstName: "Martha",
        lastName: "Wayne",
        isAlive: false
    },
    children: [{
        firstName: "Bruce",
        lastName: "Wayne",
        isAlive: true
    }],
    butler: {
        firstName: "Alfred",
        lastName: "Pennyworth",
        isAlive: false
    },
    isReach : true
};

// Methods. Are similar to Functions and the way of invoking them is the same.
var library = {
    book: "Javascript is fun",
    checkOut: function(){
        console.log("You have checked out the book " + this.book) // Library is the owner of the object
    },
    checkIn: function(number){
        console.log("You have checked in " + number + " books")
    }
}
// Output
console.log(library.checkOut())
console.log(library.checkIn(5))

// Assigning new values to the object properties
var person = {
    firsName : "Jason",
    favNumber : 7
}

person.firstName = "Bob"

console.log("The new name of the Person is: " + person.firstName)

/*
Activity:
Here are the things that should be included:
1. An object named "restaurantMenu"
2. Properties that contains
    a. The name of the restaurant
    b. The items that the restaurant sells which includes the names and prices. Price can just be a number. Limit this to 5 items.
    c. A method that lists out all the menu items with their prices via an alert.
    d. A method that allows the user to select which menu item that the user wants to order via a prompt. Simply alert the menu item back to the user.

Questions for this assignment
Please complete the tasks outlined in the instructions video. Did you have any problems while completing the assignment?


// Resolution:
var restaurantMenu = {
    name : "Delly",
    items: {
        // An Object Property
        food: "Meatball",
        foodPrice: 20,
        dessert: "Ice Cream",
        dessertPrice: 40
    },
}
*/
// Method to list menu items & prices
// I can probably use a for loop...