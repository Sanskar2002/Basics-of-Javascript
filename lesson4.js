//Functions

function preparingChai(type) {
    if(type === "Masala Chai"){
        console.log("Adding spices to the chai");
    }
    else{
        console.log("Preparing regular chai");
    }
};

preparingChai("Masala Chai");
preparingChai("Green Tea");


//If bill amount is greater than 1000 then apply 10% discount to the total amount otherwise give the original amount
function applyDiscount(amt) {
    //amt = +amt;
    if(amt >= 1000){
        console.log(`Discounted price: ${amt * 0.9}`);
    }
    else{
        console.log(`Discounted price: ${amt}`);
    }
}

applyDiscount(1410);
applyDiscount(980);

//Switch Case

function trafficLight(color) {
    switch(color){
        case "red":
            console.log("Stop here");
            break;
        case "green":
            console.log("Slow down");
            break;
        case "yellow":
            console.log("Go");
            break;
        default:
            console.log("Invalid color");
    }
}

trafficLight("blue");
trafficLight("green");
trafficLight("yellow");
trafficLight("red");

//Check truthy value
function checkTruthyValue(value){
    if(value){
        console.log("Truthy");
    }
    else{
        console.log("Falsy");
    }
}

checkTruthyValue(1);
checkTruthyValue(0);

//Login function
function login(username, password) {
    if(username==='admin' && password==='1234'){
        console.log("Login Successful");
    }
    else{
        console.log("Invalid Credentials");
    }
}

login('admin', '1234');
login('admin', '1236');