
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }


// same keys and values using ES2015
function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    };
}



// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"


// computed property Names ES2015
const favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorites"
};
console.log(instructor);


// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }


// object methods ES2015
const instructors = {
    firstName: "Colt",
    sayHi(){
        console.log("Hi!");
        return "Hi";
    },
    sayBye(){
        console.log(`${this.firstName} says bye!`);
        return this.firstName +"says bye!";
    }
    
}

  
// create animal function

const createAnimal = (species, verb, noise) => ({ 
    
        species,
        [verb](){
            return noise;
        }
    });


const d = createAnimal("dog", "bark", "Woooof!");
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");

console.log(d); // { species: "dog", bark: ƒ }
console.log(d.bark()); // "Woooof!"

console.log(s); // { species: "sheep", bleet: ƒ }
console.log(s.bleet()); // "BAAAAaaaa"