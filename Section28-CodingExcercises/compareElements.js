/*
Create a function that takes an array as a parameter and compares the values of the array.
Print out the number of matches.
Here is an example:
[1, 1, 2, 3]
1 and 1 are the same.
1 and 2 are different.

Print out would have a count of 1 match. Write some tests for your function.
*/

/* 
PSEUDO CODING
Generate a var which is an array and populate it with values
FOR (walking through the Array) -> Must be a end of arrayfunction from some sort
    need to get the 1st value of the array in a var and compare that value with the entire array
    IF there's a match
        COUNT++
RETURN
    PRINT (The quantity of matches is COUNT)
*/

/*
var arrayValues = [1,2,3,4,4,3,2,1] // Quantity of matches should be 4
var quantityMatches = 0

for (var i=0; arrayValues.length - 1; i++) {
    if (arrayValues[i] == arrayValues[i + 1]) {
        quantityMatches++ // Just increase the value
    }
    //console.log(match)
}

console.log("Quantity of matches is: ", quantityMatches)
*/

var arrayValues = [1, 2, 3, 4, 4, 3, 2, 1]; // Quantity of matches should be 4
var quantityMatches = 0;

for (var i = 0; i < arrayValues.length; i++) {
    for (var j = i + 1; j < arrayValues.length; j++) {
        if (arrayValues[i] === arrayValues[j]) {
            quantityMatches++;
        }
    }
}

console.log("Quantity of matches is: ", quantityMatches);
