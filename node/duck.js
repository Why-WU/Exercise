var util = require('util');
var Animal = require('./animal.js');

function Duck(){
    Animal.call(this);
    util.inherits(Duck,Animal);
    this.say = function(){
        console.log("ga...ga");
    }
}
function Duck(){
    Duck.prototype.say = function(){
        console.log("ga...ga");
    }
}

var duck = new Duck();
exports.say = duck.say;
duck.say()






