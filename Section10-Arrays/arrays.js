// Arrays
var container = ["Country","City", "Town"]
console.log(container)
console.log("The value of the array is: " + container[1])

// List of Lists
var listOfLists = [["City", "Tandil"],["Town", "Villa Italia"], ["Country", "Argentina"]]

// It deletes the latest element
container.pop()

// Adds more values to the array
container.push("Zip Code")
console.log(container)

// Shift & unshift - Manipulates the 1st value of the array
container.shift("Continent")
console.log(container)

container.unshift()
console.log(container)

// Change the value of a specific element
container[0] = "Argentina"
console.log(container)

// Adds values to the end
container[2] = "City"
console.log(container)

// Splice and Slice - Adds elements in specific sections
var container = ["Country","City", "Town"]

container.splice(0,0, "Continent") // Adds values to the beginning of the array
console.log(container)

container.splice(0,1) // Removes the first element of the array
console.log(container)

var container = ["Country","City", "Town"]

var NewContainer = container.slice(2)
console.log(NewContainer) // Adds the last element of the container array to this new container