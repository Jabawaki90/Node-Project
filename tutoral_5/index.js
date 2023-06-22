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

// const fs = require('fs');
// const zlib = require('zlib');

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
// });

// readStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))

// const writeStream = fs.createWriteStream("./file2.txt");

// readStream.on("data", (chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk)
// })

// readStream.pipe(writeStream);

//node server
// const http = require('http');
// const fs = require('fs');

// const server =  http.createServer((req, res)=>{
    
//     // const superHero = {
//     //     firstName: "Bruce",
//     //     lastName: "Wayne"
//     // }
//     const name = "ashraf"
    
//     // console.log('req', req);
//     res.writeHead(200, {"Content-Type":"text/html"});
//     // fs.createReadStream(__dirname+"./index.html").pipe(res);
//     let html = fs.readFileSync("./index.html", "utf-8");
//     html = html.replace("{{name}}", name);
//     res.end(html);
// })

// server.listen(4000, ()=> console.log('server run on port 4000'));

// const http = require('http');
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
    
//     // res.end(req.url);
//     switch(req.url){

//         case "/":
//         res.writeHead(200, {"Content-Type":"text/html"});
//         res.end("<h1>Homepage</h1>");
//         break;

//         case "/about":
//         res.writeHead(200, {"Content-Type":"text/html"});
//         res.end("<h1>About</h1>");
//         break;

//         case "/profile":
//         res.writeHead(200, {"Content-Type":"text/html"});
//         res.end("<h1>Profile</h1>");
//         break;

//         case "/api":
//         res.writeHead(200, {"Content-Type":"application/json"});
//         const superHero = {
//             firstName: "Clark",
//             lastName: "Kent"
//         }
//         res.end(JSON.stringify(superHero));
//         break;
        
//         default:
//         res.writeHead(404);
//         res.end("page not found");

//     }
    
// },);

// server.listen(4000, () => {
//     console.log("server started on port 4000");
// });

// const crypto = require("crypto");

// const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 8;
// const MAXX_CALL = 8;

// for(let i =0; i<MAXX_CALL; i++){
//     crypto.pbkdf2("password", "salt", 100000,512, "sha512", ()=>{
//         console.log("Hash", Date.now() - start);
//     });
// }
// crypto.pbkdf2Sync("password", "salt", 100000,512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000,512, "sha512");
// console.log("Hash", Date.now() - start);

// const https = require('https');


// const MAXX_CALL = 12;
// const start = Date.now()
// for(let i =0; i<MAXX_CALL; i++){
//     https.request("https://www.google.com", (res)=>{
//         res.on("data", ()=>{})
//         res.on("end", ()=>{
//             console.log(Date.now() - start);
//         })
//     })
//     .end()
// }

setTimeout(()=> console.log("setTimeout 1"),0);
setTimeout(()=> {
    console.log("this is setTimeout 2");
    process.nextTick(()=>{
        console.log("next tick settimeout  2");
    })
},0);
setTimeout(()=> console.log("setTimeout 3"),0);

process.nextTick(()=> console.log("this is process.nextTick 1"));
process.nextTick(()=>{
    console.log("this is process.nextTick 2");
    process.nextTick(()=> console.log("this is the inner next tick inside next tick"))
});
process.nextTick(()=> console.log("this is process.nextTick 3"));

Promise.resolve().then(()=> console.log("this is promise 1"));
Promise.resolve().then(()=>{
    console.log("this is promise 2");
    process.nextTick(()=> console.log("this is the inner next tick inside Promise then block"))
});
Promise.resolve().then(()=> console.log("this is promise 3"));



// Promise.resolve().then(()=> console.log("this is Promise.resolve 1"));
// process.nextTick(()=> console.log("this is process.nextTick 1"));

// console.log("console log 1");
// process.nextTick(()=> console.log("next tick 1"))
// console.log("console log 2");

