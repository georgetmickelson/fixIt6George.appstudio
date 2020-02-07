//
let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let withMarmaduke = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Marmaduke']
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
//Using the original 'pets' array, use the .shift() array method and output the results.
let pets = petNames.shift()
console.log('The action taken was: Removed first element of the array\nThe remaining data are:\n${petNames.shift()}');
//Using the .unshift() array method, add the name 'Barney' to the petNames array.
let withBarney = petNames.unshift('Barney')
console.log(`The action taken was: Added Barney to the array\nThe remaining data are:\n${petNames.unshift('Barney')}`);
//Using an array method of your choice, add the array below to the end of the petNames array to make a new array that you name allPets. Remember to show the new array in the output.
let allPets = petNames.push('Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed');
console.log(petNames)
console.log(`The action taken was: Add the names Ted, Fred, Jed, Ned, Ed, Zed to the array\nThe remaining data are:\n${petNames.push('Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed')}`);
//Using the array method .join(), create a string variable named stringPets that holds all of the pet names separated by commas. That is, one big long string in this format:
let newPets = ['Bob','Sam','Andy'];
let stringPets = newPets.join();
console.log(petNames);
console.log(`The action taken was: Show pet name "Bob", "Sam", and "Andy" seperated by commas\nThe output is:\n${petNames}`);
//Using the .unshift() array method, add the name 'Agnes' to the petNames array.
let addAgnes = petNames.unshift('Agnes');
console.log(petNames);
console.log(`The action taken was: Add Agnes to the petNames array\nThe output is:\n${petNames}`);







































