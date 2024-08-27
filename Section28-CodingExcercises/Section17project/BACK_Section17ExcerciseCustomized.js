var story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."

function replaceWords(storyConverted) {
    // Search for a specific word
    var wordToSearch = "cheeseburgers"
    var wordToReplace = "hamburgers"
    var wordToCapitalize = "bun"
    var quantityOfWords = 0

    // Loop through the array to modify words
    for(var i=0; i < storyConverted.length; i++) {
        // Modifying 'Cheeseburgers' by 'hamburgers'
        if(storyConverted[i].toLowerCase().includes(wordToSearch)) {
            storyConverted[i] = wordToReplace
        }
        // Modifying 'bun' by 'BUN'
        if(storyConverted[i].toLowerCase().includes(wordToCapitalize)) {
            storyConverted[i] = wordToCapitalize.toUpperCase()
        }
        quantityOfWords++
    }
    console.log("The quantity of words are: ", quantityOfWords)
    return storyConverted
}

// Calling the function to split the String
var storyConverted = story.split(' ')
console.log(storyConverted)

// Calling the funciton to replace Words
var newStory = replaceWords(storyConverted)
console.log(newStory)

// Getting a new var Story Var. The Join command converts back into a string
var updatedStory = storyConverted.join(' ')

// Compare the String results
console.log(updatedStory);

// Quantity of chars
console.log("The quantity of chars are: ", updatedStory.length) // I can call the story.lenght given that quantity are the same
