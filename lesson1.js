const fruits = [1, 2, 3, 4, 5]
//If we try to fetch negative index, it will return undefined.
console.log(fruits[1]) 

//The value assigned to let can be reassigned 
//but the value assigned to const cannot be changed, if we re-assign it some value, it will throw error
let name = "sanskar"
const age = 22
name = "raunak"
console.log(`${name} ki age ${age} hai`)

let isTrue = false
console.log(isTrue);

//when we assign null value to any variable, its type will become object
let nothing = null

//The type of undefined assigned value is undefined
let undef = undefined

//The type of symbol is symbol
let symbolVar = Symbol()

console.log(typeof(nothing))
console.log(typeof(undef))
console.log(typeof(symbolVar))
console.log(typeof(age))
console.log(typeof(name))
console.log(typeof(isTrue))
console.log(typeof(fruits))


//This is the object in the javascript
let person = {
    name: "sanskar",
    age: 22,
    isStudent: false
}

//We can access the variables declared inside the object using . sign
console.log(person)
console.log(person.age)
console.log(person.isStudent)
console.log(person.name)

//We can also re-assign the value in the variables defined inside the object
person.name = "raunak"
console.log(person.name);

let num = '42a'

//If we typecast this it will store NAN in converted
console.log(typeof(num))

let converted = Number(num)

//Its type will be changed to a number 
console.log(typeof(converted))
console.log(converted)

let newNum = '13'
console.log(typeof(newNum))

//Number typecasting can be done in three ways given below
// let convertedNum = Number(newNum)
// let convertedNum = parseInt(newNum)
let convertedNum = +newNum

console.log(typeof(convertedNum))
console.log(convertedNum)

let str = 123
// let convertedString = String(123)
let convertedString = ""+str

console.log(str)
console.log(typeof(str))
console.log(convertedString)
console.log(typeof(convertedString))
