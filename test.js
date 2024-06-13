// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// second test
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


// DollarToYen
test("One dollar should be 146.261682 yens", function(){
    
    const { fromDollarToYen } = require('./app.js')

   
    const yens = fromDollarToYen(2.5)

    // If 1 dollar son 146.2 yens, entonces 2.5 dollar deberian ser = (2.5 * 146.2)
    const expected = 2.5 * 146.261682; 
    
   // This is the comparison for the unit test
   expect(fromDollarToYen(2.5)).toBe(365.654206); 
})


// YenToPound

test("One pond should be 0.00555911", function(){
    
    const { fromYenToPound } = require('./app.js')

   
    const pounds = fromYenToPound(3.5)

    // is 1 yen son 0.00555911 pounds, entonces 2.5 dollar deberian ser = (2.5 * 0.00555911)
    const expected = 3.5 * 0.00555911; 
    
   
    // This is the comparison for the unit test
   expect(fromYenToPound(3.5)).toBe(0.01945687);
})