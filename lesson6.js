let person1 = {
    name: "Sanskar",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

// bind() → Returns a new function with this fixed, to be called later.
// call() → Calls the function immediately, passing arguments one by one.
// apply() → Calls the function immediately, passing arguments as an array.

let person2 = {
    name: "Raunak"
}

const bindGreet = person1.greet.bind(person2);
bindGreet();

person1.greet.apply(person2);

person1.greet.call({name: "mukul"});