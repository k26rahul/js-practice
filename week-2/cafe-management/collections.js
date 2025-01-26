class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class Service {
  constructor(car, date, level) {
    this.car = car;
    this.date = date;
    this.level = level;
  }
}

let xylo = new Car('xylo', 'white');
let ertiga = new Car('ertiga', 'red');

let xylo_s1 = new Service(xylo, '2025-01-01', 'A');
let xylo_s2 = new Service(xylo, '2025-01-20', 'B');

let ertiga_s1 = new Service(ertiga, '2025-01-20', 'B');
let ertiga_s2 = new Service(ertiga, '2025-01-20', 'B');
let ertiga_s3 = new Service(ertiga, '2025-01-20', 'B');

let servicingRecord = [xylo_s1, xylo_s2, ertiga_s1, ertiga_s2, ertiga_s3];

console.log(servicingRecord);

// let cars_of_vidu = [xylo, ertiga, 'apple', 99];
// console.log(xylo);
// console.log(ertiga);
// console.log(cars_of_vidu);

let array = ['apple', 'kiwi', 'banana'];

array = array.filter(item => {
  if (item == 'apple') return false;
  return true;
});

console.log(array);

// let array = ['apple', 'banana'];

// console.log(array.includes('banana'));
