

class EvenEmitter {
  constructor() {
    this.hanlder = {}; //句柄
  }
  on(eventName, callback) {
    //一定有事件名和callback
    if (!this.handles) {
      this.handles = {};
    }
    if (!this.hanldes[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(callback);
  }
  emit(eventName, ...arg) {
    if (this.handles[eventName]) {
      for (var i = 0; i < this.handles[eventName].length; i++) {
        this.handles[eventName][i](...arg);
      }
    }
  }
}

EvenEmitter.prototype.addListener = EvenEmitter.prototype.on;

let event = new EventEmitter();

/* event.on("say", function(str) {
  console.log(str);
}); */

event.addListener("say", function(str) {
  console.log(str);
});

event.emit("say", "why");
