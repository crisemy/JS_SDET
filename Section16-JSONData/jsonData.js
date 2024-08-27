// Json Data is only useful for storing data. Is not useful for making logical stuff
// Site to validate your JSON data structure. Json Validator >> https://jsonlint.com/
// Pokeapi.co >> For getting some API Examples.
// 1. Keys need to be in double quotes ("")
// 2. Functions cannot be allowed as JSON Values

// Store a JSON data in a js variable
var school = {
    "name" : "Learning U",
    "classes" : [
        {
            "title" : "Cooking is fun",
            "teacher" : "Mr. Jones",
            "courseId" : "A123",
            "credits" : 3    
        },
        {
            "title" : "Salads for all!",
            "teacher" : "Mr. John Mayer",
            "courseId" : "A456",
            "credits" : 2    
        },
        {
            "title" : "Soup for your belly",
            "teacher" : "Mr. Chin Chu Lin",
            "courseId" : "A789",
            "credits" : 4    
        }
    ]
}

console.log(school.name)
console.log(school.classes[1].title) // Here it's the way of asking for a proper value.