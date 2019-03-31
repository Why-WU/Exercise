var crypto = require("crypto");
var User_model = require("../models/user_model.js");

exports.check = function(req, res, next) {
  var name = req.body.uname;
  User_model.checkname(name, function(error, data) {
    if (data.length > 0) {
      res.send("success");
    } else {
      res.send("error");
    }
  });
};

exports.reg = function(req, res, next) {
  res.render("reg");
};

exports.do_reg = function(req, res, next) {
  var name = req.body.uname;
  var pass = req.body.pass;

  var hash = crypto.createHash("md5");

  hash.update(pass);
  var mpass = hash.digest("hex");

  //827ccb0eea8a706c4c34a16891f84e7b
  //var mpass=md5(pass);  md5(md5(pass+salt))

  //验证用户名是不是存在
  User_model.checkname(name, function(error, data) {
    //console.log(data);
    if (data.length > 0) {
      res.redirect("/reg");
    } else {
      User_model.insert_data(name, mpass, function(error, data) {
        //console.log(data);
        if (data.affectedRows == 1) {
          res.redirect("/login");
        }
      });
    }
  });

  /*
   */

  //console.log(name);
  //console.log(pass);

  //连接数据库  用插入数据的方法
};

exports.login = function(req, res, next) {
  res.render("login");
};

exports.do_login = function(req, res, next) {
  var name = req.body.uname;
  var pass = req.body.pass;

  User_model.sel_data(name, pass, function(error, data) {
    console.log(data);
  });
};
