//
let petnames = ('Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam')
let withMarmaduke = ('Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Marmaduke')
// remove "Vinny" from the array
let removeVinny = petNames.splice(5,1);
console.log(petNames)
console.log('The action taken was: Remove Vinny\nThe remaining data are:\n${petNames}');
// remove "Marty" from the array
let removeMarty = petNames.splice(3,1);
console.log(petNames)
console.log('The action taken was: Remove Marty\nThe remaining data are:\n${petNames}');
//add "Nancy" to the front of the array.
let addNancy = petNames.unshift('Nancy');
console.log(petNames)
console.log('The action taken was: Add Nancy\nThe remaining data are:\n${petNames}');
//add their name to the end of the array.
let addGeorge = petNames.push('George');
console.log(petNames)
console.log('The action taken was: Add George\nThe remaining data are:\n${petNames}');
//tell the user the array index where "Riley" is located in the array.
console.log(petNames.indexOf("Riley"));
console.log('The action taken was: Tell us where Riley is located\nThe output is:\n${petNames.indexOf("Riley")}');
//tell the user the array index where "Riley" is located in the array.
console.log(petNames.indexOf("Cindy"));
console.log('The action taken was: Tell us where Cindy is located\nThe output is:\n${petNames.indexOf("Cindy")}');
// show the 'withMarmaduke' array data.
console.log(withMarmaduke);
console.log('The action taken was: Showing Marmaduke data\n The output is: \n${withMarmaduke}');
