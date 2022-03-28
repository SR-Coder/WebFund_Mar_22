
// just variables
let pizza1crust = "traditional";
let pizza1sauce = "red";
let pizza1cheese = "moz";

let pizza2crust = "traditional";
let pizza2sauce = "red";
let pizza2cheese = "moz";

// objects
let pizza1 = {
    "crust": "traditional",
    "sauce": "red",
    "cheese": "moz",
    "displayPizza": function (){
        console.log(this.crust, this.sauce, this.cheese);
    }
}

let pizza2 = {
    "crust": "deep dish",
    "sauce": "garlic",
    "cheese": "cheedar",
    "displayPizza": function (){
        console.log(this.crust, this.sauce, this.cheese);
    }
}

// console.log(pizza1.cheese);

// function takesPizzaObj(myObj){
//     console.log(myObj.crust, myObj.sauce, myObj.cheese);
// }

pizza1.displayPizza();
pizza2.displayPizza();
