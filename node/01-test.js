var http = require("http");
var url = require("url");
var querystring=require('querystring');

http
  .createServer(function(reg, res) {

    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case"/":
            getIndex(res);
            
    }

    
    /* var pathname = usr.parse(req.url).query;
    //console.log(pathname);

    var data = "{'id':1,'name':'laoshan'}";
    // var obj = eval("("+data+")");  不安全
    var obj = querystring.parse(data);
    console.log(obj);*/
  }) 
  .listen(3000),
  console.log("server start");
