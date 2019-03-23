var util = require('util');
var Animal = require('./animal');

function Bird(){
    Animal.call(this);
    util.inherits(Bird,Animal);
    this.say = function(){
        console.log("ji...ji");
    }
}