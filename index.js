let name = require("./test")
console.log(name);

const { log } = require('console');
let http = require('http')

http.createServer((req, res)=>{
    res.write("<h1>Hello this is First port </h1> ");
    res.end()
}).listen(4500, () => {
    console.log("server run on 4500")
})

http.createServer((req, res)=>{
    res.write("<h1>Hello this is Second port </h1> ");
    res.end()
}).listen(4501, () => {
    console.log("server run on 4501")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Third port </h1> ");
    res.end()
}).listen(4502, () => {
    console.log("server run on 4502")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Fourth port </h1> ");
    res.end()
}).listen(4503, () => {
    console.log("server run on 4503")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Fifth port </h1> ");
    res.end()
}).listen(4504, () => {
    console.log("server run on 4504")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Sixth port </h1> ");
    res.end()
}).listen(4505, () => {
    console.log("server run on 4505")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Seven port </h1> ");
    res.end()
}).listen(4506, () => {
    console.log("server run on 4506")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Eight port </h1> ");
    res.end()
}).listen(4507, () => {
    console.log("server run on 4507")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Nine port </h1> ");
    res.end()
}).listen(4508, () => {
    console.log("server run on 4508")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Ten port </h1> ");
    res.end()
}).listen(4509, () => {
    console.log("server run on 4509")
})
http.createServer((req, res)=>{
    res.write("<h1>Hello this is Eleven port </h1> ");
    res.end()
}).listen(4510, () => {
    console.log("server run on 4510")
})