// app.js file content
console.log("Hello World")

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves
console.log(sum(7,3))


// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the doller value
    return valueInDollar;
}
   

// Dollar To Yen
const fromDollarToYen = function(valueInDollar){
   
    let valueInYen = (valueInDollar/oneEuroIs.USD) * oneEuroIs.JPY;
    
    return +valueInYen.toFixed(6);
}


// Yen To Pound
const fromYenToPound = function(valueInYen){
   
    let valueInPound = (valueInYen/oneEuroIs.JPY) * oneEuroIs.GBP;
    
    return +valueInPound.toFixed(8);
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };