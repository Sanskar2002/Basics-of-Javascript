let chaiTypes = ["Masala Chai", "Green Tea", "Oulong Tea", "Ginger Tea"];
console.log(chaiTypes[2]);
console.log(`Total chai types : ${chaiTypes.length}`);

//Add the element in the end
chaiTypes.push("Lemon Tea");

//Prints the array
console.log(chaiTypes);
console.log(`Total chai types : ${chaiTypes.length}`);

//Pops the last element from the array
const data = chaiTypes.pop();
console.log(data);

//Gives the index of the given element and if the element not present it will return -1
let index = chaiTypes.indexOf("Green Tea");
console.log(index);

//It will check if element is present then it will remove that element from the array
if(index !== -1){
    chaiTypes.splice(index, 1);
}
console.log(chaiTypes);

//For each loop to iterate over each element in the array
chaiTypes.forEach((chai, index) => {
    console.log(`${index+1} : ${chai}`);
})

let moreChaiTypes = ["Black Tea", "My Tea"];

//Concating both the arrays
let allChaiTypes = chaiTypes.concat(moreChaiTypes);
console.log(allChaiTypes);

//Another way to concat using spread operator 
let allChaiTypes2 = [...chaiTypes, "Black Tea", "My Tea"];
console.log(allChaiTypes2);

//Define chai recipe 
let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves: "Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown Sugar",
        spices: ["Dalchini", "Ginger"]
    }, 
    instructions: "Boil water, add tea leaves, sugar & spices"
}

//Now we can update this recipe using spread operator 
let updatedChaiRecipe = {
    ...chaiRecipe, 
    instructions: "Don't do anything"
}

console.log(chaiRecipe);
console.log(updatedChaiRecipe);

//Object destructuring
let{name, myIngredients} = chaiRecipe;

//Array destructuring
let [firstChai, secondChai, thirdChai, fourthChai] = chaiTypes;

console.log(myIngredients);
console.log(name);
console.log(thirdChai);
console.log(fourthChai);
