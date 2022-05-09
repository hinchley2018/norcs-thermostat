// Note: We'll be using the Fahrenheit scale for this assignment.

// This code sets a random starting current temperature between 0 and 100 degrees.
let currentTemp = Math.round(Math.random() * 100)

// Give the thermostat user a status message.
console.log(`The current temperature is ${currentTemp}°F`)

let userTemp = Number(window.prompt ("What temp  is it "))
console.log(`the user temp is ${userTemp}°F`)
//Requirements
// a thermostat and increase and decrease the temp
// input from user about the desired temp
// currentTemp (provided on line 4)
// stringUserInput <- window.prompt ("What temp  is it ")


while (currentTemp !== userTemp){
    //is the temp > currentTemp
    if(userTemp > currentTemp){
        //start raising current Temp to match desired temp
        currentTemp = currentTemp + 1
        console.log("debug", currentTemp)
    }
    //is the temp < currentTemp
    if( userTemp < currentTemp){
        //start lowering current Temp to match desired temp
        currentTemp = currentTemp - 1
        console.log("debug", currentTemp)
    }
    
        
}

console.log("End of program, current temp is ", currentTemp , "F")


//is the temp === currentTemp
    //we are done no action needed

//test cases
//Passes == currentTemp is random pick a value lower -> currentTmep match desired
//currentTemp is random pick a value lower -> currentTmep match desired
//currentTemp is random pick a value lower -> currentTmep match desired


//some way of scheduling (feature for the future)