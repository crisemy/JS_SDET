/* 
A Palindrome is a word or phrase that is the same forwards of backwards.
Example: "Anna" backwards is "Anna"
Write a function that checks if a word or phrase is a palindrome.
Write some tests for your function. 
Some examples: 
Malayalam (9 letters)
Deified (7 letters)
Reviver (7 letters)
Rotavator (9 letters)
Detartrated (11 letters)
*/

// Starting programm
var pal = "Malayalam"

function palindrome(word, isPalindrome) {
    // Convert the word to lowercase to make the check case-insensitive
    word = word.toLowerCase()

    var startIndex = 0
    var endIndex = word.length - 1
    var isPalindrome = true

    while (startIndex < endIndex) {
        if (word[startIndex] !== word[endIndex]) {
            isPalindrome = false
            break // Don't need to continue if we find out a NON Palyndrome word
        }
        startIndex++
        endIndex--    
    }
    return isPalindrome
}

if(palindrome(pal)) {
    console.log("The word is a Palyndrome one")
} else {
    console.log("The word is NOT a palyndrome one")
}
/*
Possitive Scenarios
pal("Anna")
pal("Detartrated")

Negative Scenario
pal("")
pal()
*/

/* PSEUDO CODING 
BEGIN
    FUNCTION isPalindrome(word)
        SET startIndex TO 0
        SET endIndex TO LENGTH of word - 1

        WHILE startIndex < endIndex
            IF word[startIndex] IS NOT EQUAL TO word[endIndex]
                RETURN False
            END IF

            INCREMENT startIndex
            DECREMENT endIndex
        END WHILE

        RETURN True
    END FUNCTION

    DISPLAY "Enter a word: "
    READ word

    IF isPalindrome(word) IS True
        DISPLAY "The word is a palindrome."
    ELSE
        DISPLAY "The word is not a palindrome."
    END IF
END
*/