let myIterable = {
  salary: 1000,

  // call this method to get an iterator
  [Symbol.iterator]() {
    let count = 0;
    // below is the iterator obj
    return {
      next() {
        if (count < 3) {
          count++;
          return { value: `boom${count}`, done: false };
        }
        return { value: null, done: true }; // break the loop
      },
    };
  },
};

// myIterable has boom1, boom2, boom3
for (let item of myIterable) {
  console.log(item);
}

// alternative (for loop not needed)
let myIterator = myIterable[Symbol.iterator]();
myIterator.next();

// count = 0;
// function killBattery() {
//   if (count < 3) {
//     count++;
//     console.log('killed');
//   } else {
//     console.log('already killed 3 times');
//   }
// }
// killBattery();
// killBattery();
// killBattery();
// killBattery();
// killBattery();
