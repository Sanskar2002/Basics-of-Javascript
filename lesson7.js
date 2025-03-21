let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Negative index will return undefined
console.log(arr[-1]);

const user = {
    name: "sanskar",
    age: 22,
    password: "1234"
}

//Using proxy password, we can control our object from showing sensitive information to public
const proxyUser = new Proxy(user, {
    get(target, prop) {
        if(prop != "password")
        return target[prop]
        else
        return "Access Denied!!"
    }
})

console.log(proxyUser.name);
console.log(proxyUser.age);
console.log(proxyUser.password);

//To handle negative index in the array
function negativeIndex(arr){
    return new Proxy(arr, {
      get(target, prop) {
        const index = Number(prop)
        if (index < 0) {
          return target[target.length + index];
        }

        return target[index];
      },
    });
}

let newArr = negativeIndex(arr);
console.log(newArr[-4]);


let rarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function setValues(arr) {
  return new Proxy(arr, {
    set(target, prop, input) {
      target[prop] = input;
      return true; // Required for Proxy set traps
    },
  });
}

const newa = setValues(rarr);
newa[3] = 4238823; // Now modifying `newa` will also modify `rarr`
console.log(rarr); 

//Closure functions in JS
//Function binded by its lexical scope is called closure function
function increment() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const x = increment();
const y = increment();

console.log("The below is the example of closures :")
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());
console.log(x() + " " + y());

//Lexical scope in JS is a convention to determine how the variables are accessible inside the block of code 
//In JS, a closure function that has access to the variable of the outer function even after the outer function has finished executing 
//A function returning a function with its lexical scope binded is known as closure function.