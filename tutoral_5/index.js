// const path = require("path");

//path modules
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2", "index.html"));

//Callback pattern

//events module
// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on('order received', ()=> console.log('preparing pizza!'))
// emitter.on('order cancel', ()=> console.log('stop preparing pizza!'))

// emitter.emit('order received')
// emitter.emit('order cancel')

//Extending from eventEmitter
// const PizzaShop = require('./pizza-shop');
// const DrinkMachine = require("./drink-machine")

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping)=>{
//  console.log(`order for pizza size:${size} & with ${topping} topping`);
//  drinkMachine.serveDrink(size)
// })

// pizzaShop.order('small', 'mushroom');
// pizzaShop.displayOrderNumber();
// pizzaShop.order();
// pizzaShop.displayOrderNumber();
// pizzaShop.order();
// pizzaShop.displayOrderNumber();

// const fs = require('fs/promises');

// fs.readFile('./greet.txt', 'utf-8').then( data => console.log(data)).catch(e=> console.log(e))


// const fs = require('fs');
// console.log(fs.readFileSync('./file.txt', "utf-8"));

// fs.writeFileSync('./greet.txt', "Hello Ashraf");

// fs.readFile('./greet.txt', (error, data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// });

const fs = require('fs');

const readStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./file2.txt");

readStream.on("data", (chunk)=>{
    console.log(chunk);
    writeStream.write(chunk)
})