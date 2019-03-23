var util = require('util')
var Human = require('./human')

function Programmer(){
    Human.call(this);
    util.inherits(Programmer,Human)
    this.do = function(){
        console.log('写代码')
    }
}

var programmer = new Programmer;
exports.do = programmer.do;