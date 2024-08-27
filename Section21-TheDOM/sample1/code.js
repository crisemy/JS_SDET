/*
// Finding Elements

var headingText = document.getElementById("heading")
console.log(headingText)

// Gain access to just the 1st one of the entire list of elements
var paragraphText = document.getElementsByClassName("content")[1] 
console.log(paragraphText)

var heading2Text = document.getElementsByTagName("h2")[0]
console.log(heading2Text)

console.log(document.body)
console.log(document.URL)
console.log(document.title)
console.log(document.head)

// Relationships
var hiText = document.getElementById("heading").firstChild
console.log(hiText)

var h1Sib = document.getElementById("heading").nextSibling
console.log(h1Sib)

var h1Par = document.getElementById("heading").parentNode
console.log(h1Par)
*/

// Changing the HTML Content
document.getElementById("heading").innerHTML = "This is a new Heading"

// Creating a new Element
var p = document.createElement("p")
var pText = document.createTextNode("New Paragraph")
p.appendChild(pText)

document.getElementById("main").appendChild(p)

// Adding values to the Alt element of the logo.png image
document.getElementById("logo").alt = "Glitch IT System"

// Remove the Logo image - Comment this out if you'd like to see the logo back again
var logo = document.getElementById("logo")
document.getElementById("main").removeChild(logo)

// Changing style of HTML
document.getElementById("heading").style.color = "blue"
document.getElementById("main").style.border = "1px black solid"