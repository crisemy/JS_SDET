function btnPressed() {
    console.log("Button 1 was pressed")
    document.getElementById("p1").innerHTML = "Button 1 Pressed"
}

function txtTyped() {
    console.log("Text was typed properly")
    
    // Act as there's a Password Control Key somewhere
    if(document.getElementById("i1").value == "123") {
        document.getElementById("p2").innerHTML = "Valid Data"
    } else {
        document.getElementById("p2").innerHTML = "INVALID Data"            
    }
}

document.getElementById("b2").addEventListener("click", btn2Pressed)
function btn2Pressed() {
    console.log("Button 2 was pressed")
    document.getElementById("p3").innerHTML = "Button 2 Pressed" 
}

document.getElementById("i2").addEventListener("change", txt2Typed)
function txt2Typed() {
    console.log("Text was typed in!")
}

document.getElementById("p4").addEventListener("mouseover", moused)

// Once it does mouseOver, a text is gonna appear in the console. Notice the = action. 
// In this case you'd need to assign another value to the innerHTML method
function moused() {
    document.getElementById("p4").innerHTML = "You have been Moused!" 
    console.log("You have been Moused!")
}