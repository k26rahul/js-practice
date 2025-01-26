// callback should be a function
function sayHello(callback) {
  console.log('saying hello');
  callback(); // 💚 callback is called
}

function launchMissile() {
  // 💚 this line is gonna run in future, when callback is called
  console.log('i did hello, now launch missile');
}

sayHello(launchMissile);
