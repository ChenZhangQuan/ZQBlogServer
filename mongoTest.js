var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var DB_CONN_STR = 'mongodb://localhost:27017/blog';// # 数据库为 runoob
var DB_COLLECTION_STR = 'article';



var selectArticles = function(callback) {

  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if (!err) {
      //连接到表 users
      var collection = db.collection(DB_COLLECTION_STR);
      //插入数据

      collection.find().toArray(function(err, result) {
        if(err){
          console.log('selectArticles失败－原因：'+ err);
          callback(null);
        }else{
          console.log('selectArticles成功');
          callback(result);
        }

        db.close();
      });
    }else{
      console.log("selectArticles失败－原因：连接失败！");
    }
  });

}

var selectArticleWithArticleID = function(articleID,callback) {

  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if (!err) {
      //连接到表 users
      var collection = db.collection(DB_COLLECTION_STR);
      //插入数据
      var id = articleID;
      if (typeof articleID == 'string') {
        id = ObjectID(articleID)
      }


      var whereStr = {"_id":id};
      collection.find(whereStr).toArray(function(err, result) {
        if(err){
          console.log('selectArticleWithArticleID失败－原因：'+ err);
          callback(null);
        }else{
          console.log('selectArticleWithArticleID成功');
          callback(result);
        }

        db.close();
      });
    }else{
      console.log("selectArticleWithArticleID失败－原因：连接失败！");
    }
  });

}

var insertArticle = function(title,content,callback) {
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if (!err) {
      //连接到表 users
      var collection = db.collection(DB_COLLECTION_STR);
      //插入数据
      var data = [{
        title:    title,
        content:  content
      }];
      collection.insert(data, function(err, result) {
        if(err){
          console.log('insertArticle失败－原因：'+ err);
          callback(null);
        }else{
          console.log('insertArticle成功');
          callback(result);
        }

        db.close();

      });
    }else{
      console.log("insertArticle失败－原因：连接失败！");
    }
  });

}
//
// var updateUser = function(userid,updateValue,callback) {
//
//   MongoClient.connect(DB_CONN_STR, function(err, db) {
//     if (!err) {
//       //连接到表
//       var collection = db.collection('users');
//       //更新数据
//       var whereStr = {"userid":userid};
//       var updateStr = {$set: updateValue };
//       collection.update(whereStr,updateStr, function(err, result) {
//         if(err){
//           console.log('updateUser失败－原因：'+ err);
//           callback(null);
//         }else{
//           console.log('updateUser成功');
//           callback();
//         }
//
//           db.close();
//         });
//     }else{
//       console.log("updateUser失败－原因：连接失败！");
//     }
//   });
//
// }


exports.selectArticles = selectArticles;
exports.selectArticleWithArticleID = selectArticleWithArticleID;
exports.insertArticle = insertArticle;
// exports.updateUser = updateUser;
