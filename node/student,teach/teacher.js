var util = require('util');
var Human = require('./human');

function Teacher(){
   Human.call(this);
   util.inherits(Teacher,Human);
   this.do = function(){
       console.log('teaching')
   }
}

var teacher = new Teacher;
exports.do = teacher.do;
