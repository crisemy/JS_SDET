// Adding properties to objects
var person = {
    firstName: "Cris",
    lastName: "N."
}

console.log(person)
console.log(person.firstName)

person.age = 47 // Adds a new property to the object

delete person.firstName // Deletes the whole property of the objects
console.log(person)

// A different way of adding methods
// A way of doing it
var person = {
    myName: "Cris",
    mySurname: "N.",
    myNameIs: function() {
        console.log(this.myName+ " "+ this.mySurname)
    }
}

// Another way of doing it. A shorter way
var person = {
    myName: "Cris",
    mySurname: "N.",
    myNameIs() {
        console.log(this.myName+ " "+ this.mySurname)
    }
}

console.log("Person Object: ", person)
console.log(person.myNameIs())

// Using Getters and Setters
var person = {
    myName: "Cris",
    mySurname: "N.",
    get myNameIs() { // The 'get' is the clue
        return this.myName+ " "+ this.mySurname // Using the return to print out values
    },
    set myNameIs(value) {
        var name = value.split()
        this.firstName = name[0]
        this.lastName = name[1]
    }

}
person.myNameIs = "Bob Jones"
console.log(person.myNameIs)

// Constructors. Is like a blue print of an object. Instead of doing the below, lets create a function
var me = {
    firstName: "Cris",
    lastName: "N.",
    myName() {
        console.log(this.firstName+ " " +this.lastName)
    }
}

var bestFriend = {
    firstName: "Bob",
    lastName: "Esponja",
    myName() {
        console.log(this.firstName+ " " +this.lastName)
    }
}

// Print values
console.log(me)
console.log(me.myName())
console.log(bestFriend)

// It's a constructor function. That's why it starts with a Capital
function Person(first, last) {
    this.firstName = first
    this.lastName = last
    // A function for the method that is going to 
    this.myName = function() { 
        console.log("My name is: " +this.firstName+ ". My Last name is: " +this.lastName)
    } 
}

var me = new Person("Cris", "N.")
console.log(me)
console.log(me.myName())