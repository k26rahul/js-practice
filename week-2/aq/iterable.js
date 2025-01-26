let array = ['rahul', 'vidu', 'muskan'];
console.log(array);

// array.forEach(name => {
//   console.log(name);
// });

for (let name of array) {
  console.log(name);
}

let set = new Set([1, 2, 2, 4, 19, 19]);
console.log(set);

// set.forEach(num => {
//   console.log(num);
// });

for (let num of set) {
  console.log(num);
}
