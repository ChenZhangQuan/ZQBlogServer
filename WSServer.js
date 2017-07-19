var mongo = require("./mongoTest.js")


///////////////////////////////////////
////////////////登录登出接口/////////////
///////////////////////////////////////

var express = require('express');
var app = express();
var server = app.listen(7999, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("博客访问地址 http://%s:%s", host, port)
})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// app.get('/:filename', function (req, res) {
//  console.log(req.params.filename);
//  // res.send('Hello World');
//  res.sendfile(__dirname + '/'+ req.params.filename);
//
// })

app.get('/articles', function (req, res) {



  mongo.selectArticles(function(result){
    // console.log(result);
    // var logoutstate = {
    //   'code':"0",
    //   'message':"success",
    // };
      res.send(result);
  });



})
