const arr = [1, 2, 3];

const arrNew = arr.map(element => element * 5);

console.log(arr);
console.log(arrNew);

//prototype adds functionalities to the data types

Object.prototype.chai = function() {
    console.log("chai");
}

const obj = {
    x: 1, 
    y: 1
}

Object.chai();

//Lets code the polyfill for forEach function

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn) {
        const originalArr = this;
        for(let i=0; i<originalArr.length; i++){
            userFn(originalArr[i], i);
        }
    }
}

arr.myForEach(element => 
    console.log(element * 5)
)

arr.myForEach(element => 
    console.log(
        `This is my element: ${element}`
    )
)

//Lets code the polyfill for myMap function

if(!Array.prototype.myMap){
    Array.prototype.myMap = function (userFn) {
        const result = [];
        for(let i=0; i<this.length; i++){
            const value = userFn(this[i], i);
            result.push(value);
        }
        return result;
    };
}

const mappedArr = arr.myMap(x => x * 4);
console.log(mappedArr);

//Lets code the polyfill for myMap function

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn) {
        const filtered = [];
        for(let i=0; i<this.length; i++){
            if(userFn(this[i])){
                filtered.push(this[i]);
            }
        }

        return filtered;
    }
}

const filteredArr = arr.myFilter((element) => element%1 == 0);
console.log(filteredArr);

//Multiple ways to write the functions

//Function declaration
function add(a, b) {
    return a + b;
}
console.log(add(4, 6));

//Function expression
const subtract = function(a, b) {
    return a - b;
}
console.log(subtract(14, 6));

//Arrow function 
const multiply = (a, b) => a * b;

//First class function
function applyOperation (a, b, operation) {
    return operation(a, b);
}
const result = applyOperation(5, 4, (x, y) => x/y);
console.log(result);

//Self-calling functions
(function() {
    console.log("sanskar")
})();