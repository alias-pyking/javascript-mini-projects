function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
	  this.observers.filter(function (item) {
		
		console.log(fn.name);
		console.log(item.name);
		if (item != fn) {
			return item;
      }
    });
    console.log(`You are unsubscribed to ${fn.name}`);
  },
  fire: function (fn) {
    this.observers.forEach((item) => {
      item.call();
    });
  },
};

const click = new EventObserver();

// Event listner

document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurrMilliseconds);
});
document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurrMilliseconds);
});
document.querySelector(".fire").addEventListener("click", function () {
  click.fire(getCurrMilliseconds);
});
const getCurrMilliseconds = function(){
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};
