// Unit testing
// Test against specific functions

// Unit Tests typically Automated
// Actual vs Expected

// Function for Unit Testing. Name is the title of the Test
function test(name, expected, actual) {
    if(expected === actual) {
        console.log(name + "\nExpected results: " + expected + " are equal to actual: " + actual)
    } else {
        console.log("TEST FAILED")
        console.log(name + "\nExpected results: " + expected + " are NOT equal to actual: " + actual)
    }
}

// Creating the Function to test the Unit Test
function blah(num) {
    return num
}

test("Test if numbers are equal", blah(2), 3)

