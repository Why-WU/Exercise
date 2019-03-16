var http = require('http')
http.createServer(function(req,res){
    res.write('<h1>node.js</h1>');
    res.end('hello world')
}).listen("3000")
console.log('3000端口');
