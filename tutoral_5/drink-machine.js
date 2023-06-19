const EventEmitter = require("events");

class DrinkMachine {
    serveDrink(size){
        if(size == "large"){

            console.log("Serving complimentary drink");
        }else{
            console.log("small drink");

        }
    }
}

module.exports = DrinkMachine;