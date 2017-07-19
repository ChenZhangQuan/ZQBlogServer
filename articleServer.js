var WebSocketServer = require('ws').Server;
var mongo = require("./mongoTest.js")


// var rf=require("fs");
// var content=rf.readFileSync("./mds/oc解决发送消息无法传递和返回基本数据类型的问题.md","utf-8");
// // console.log(content);
//
// mongo.insertArticle("oc解决发送消息无法传递和返回基本数据类型的问题",content,function(result){
// });
// return;


// mongo.insertArticle(function(result){
//   // console.log(result);
//
// });
// return;

// mongo.selectArticles(function(result){
//   console.log(result[0].title);
//   console.log(result[0]._id);
//
//
// });

// mongo.selectArticleWithArticleID(result[0]._id,function(result2){
//   console.log(result2);
// });
