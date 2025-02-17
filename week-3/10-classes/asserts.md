### Test Code for **Car**

```javascript
const car = new Car('Toyota', 'Corolla', 2015);

console.assert(car.brand === 'Toyota', 'Brand should be Toyota');
console.assert(car.model === 'Corolla', 'Model should be Corolla');
console.assert(car.year === 2015, 'Year should be 2015');
console.assert(car.speed === 0, 'Initial speed should be 0');

car.accelerate(20);
console.assert(car.speed === 20, 'Speed should be 20 after accelerating by 20');

car.brake(10);
console.assert(car.speed === 10, 'Speed should be 10 after braking by 10');

car.brake(15);
console.assert(car.speed === 0, 'Speed should not go below 0');

console.assert(car.getAge(2025) === 10, 'Car age should be 10 in 2025');
console.assert(
  car.getDetails() === 'Brand: Toyota, Model: Corolla, Year: 2015',
  'Details string should match format'
);

console.log('All Car tests passed ✅');
```

---

### Test Code for **Book**

```javascript
const book = new Book('1984', 'George Orwell', 328);

console.assert(book.title === '1984', 'Title should be 1984');
console.assert(book.author === 'George Orwell', 'Author should be George Orwell');
console.assert(book.pages === 328, 'Total pages should be 328');
console.assert(book.currentPage === 0, 'Initial current page should be 0');

book.read(50);
console.assert(book.currentPage === 50, 'Current page should be 50 after reading 50 pages');

book.read(300);
console.assert(book.currentPage === 328, 'Current page should not exceed total pages');

console.assert(book.getProgress() === 'Progress: 100% read', 'Progress should be 100%');

book.restart();
console.assert(book.currentPage === 0, 'Current page should reset to 0 after restart');

console.assert(
  book.getDetails() === 'Title: 1984, Author: George Orwell',
  'Details string should match format'
);

console.log('All Book tests passed ✅');
```

---

### Test Code for **User**

```javascript
const user = new User('john_doe', 'john@example.com', 25);

console.assert(user.username === 'john_doe', 'Username should be john_doe');
console.assert(user.email === 'john@example.com', 'Email should be john@example.com');
console.assert(user.age === 25, 'Age should be 25');
console.assert(user.isActive === false, 'Initial active status should be false');

user.login();
console.assert(user.isActive === true, 'Active status should be true after login');

user.logout();
console.assert(user.isActive === false, 'Active status should be false after logout');

user.updateEmail('john.doe@gmail.com');
console.assert(user.email === 'john.doe@gmail.com', 'Email should update to john.doe@gmail.com');

console.assert(
  user.getDetails() === 'User: john_doe, Email: john.doe@gmail.com, Age: 25',
  'Details string should match format'
);

console.log('All User tests passed ✅');
```

---

### Test Code for **Rectangle**

```javascript
const rect = new Rectangle(10, 20);

console.assert(rect.width === 10, 'Width should be 10');
console.assert(rect.height === 20, 'Height should be 20');

console.assert(rect.getArea() === 200, 'Area should be 200');
console.assert(rect.getPerimeter() === 60, 'Perimeter should be 60');

rect.resize(15, 15);
console.assert(rect.width === 15 && rect.height === 15, 'Width and height should update to 15');

console.assert(rect.isSquare() === true, 'Rectangle should be a square after resizing');

console.log('All Rectangle tests passed ✅');
```

---

### Test Code for **Animal**

```javascript
const animal = new Animal('Leo', 'Lion', 'Roar');

console.assert(animal.name === 'Leo', 'Name should be Leo');
console.assert(animal.species === 'Lion', 'Species should be Lion');
console.assert(animal.sound === 'Roar', 'Sound should be Roar');

console.assert(animal.makeSound() === 'Roar', 'makeSound should return Roar');

console.assert(
  animal.getDetails() === 'Name: Leo, Species: Lion',
  'Details string should match format'
);

animal.rename('Max');
console.assert(animal.name === 'Max', 'Name should update to Max');

console.log('All Animal tests passed ✅');
```

---

### Test Code for **BankAccount**

```javascript
const acc1 = new BankAccount('12345');
const acc2 = new BankAccount('67890');

console.assert(acc1.accountNumber === '12345', 'Account number should be 12345');
console.assert(acc1.balance === 0, 'Initial balance should be 0');

acc1.deposit(100);
console.assert(acc1.balance === 100, 'Balance should be 100 after deposit');

acc1.withdraw(50);
console.assert(acc1.balance === 50, 'Balance should be 50 after withdrawal');

acc1.withdraw(60);
console.assert(acc1.balance === 50, 'Balance should remain 50 if withdrawal exceeds balance');

acc1.transfer(30, acc2);
console.assert(acc1.balance === 20, 'Balance should be 20 after transfer');
console.assert(acc2.balance === 30, 'Balance of acc2 should be 30 after receiving transfer');

console.log('All BankAccount tests passed ✅');
```

---

### Test Code for **Movie**

```javascript
const movie = new Movie('Inception', 'Christopher Nolan', 2010);

console.assert(movie.title === 'Inception', 'Title should be Inception');
console.assert(movie.director === 'Christopher Nolan', 'Director should be Christopher Nolan');
console.assert(movie.releaseYear === 2010, 'Release year should be 2010');
console.assert(movie.ratings.length === 0, 'Ratings should initially be empty');

movie.addRating(9);
movie.addRating(8);
console.assert(movie.ratings.length === 2, 'Ratings should have 2 entries');
console.assert(movie.getAverageRating() === 8.5, 'Average rating should be 8.5');

console.assert(
  movie.getDetails() === 'Title: Inception, Directed by: Christopher Nolan',
  'Details string should match format'
);

console.assert(movie.isClassic(2025) === false, 'Movie should not be a classic in 2025');

console.log('All Movie tests passed ✅');
```

---

### Test Code for **Product**

```javascript
const product = new Product('Laptop', 1200, 10);

console.assert(product.name === 'Laptop', 'Name should be Laptop');
console.assert(product.price === 1200, 'Price should be 1200');
console.assert(product.stock === 10, 'Stock should be 10');

console.assert(product.isAvailable() === true, 'Product should be available');

product.purchase(5);
console.assert(product.stock === 5, 'Stock should be 5 after purchasing 5 units');

product.restock(10);
console.assert(product.stock === 15, 'Stock should be 15 after restocking 10 units');

product.purchase(20);
console.assert(product.stock === 15, 'Stock should remain 15 if purchase exceeds stock');

console.log('All Product tests passed ✅');
```

---

### Test Code for **Person**

```javascript
const person = new Person('John', 'Doe', 17);

console.assert(person.firstName === 'John', 'First name should be John');
console.assert(person.lastName === 'Doe', 'Last name should be Doe');
console.assert(person.age === 17, 'Age should be 17');

console.assert(person.getFullName() === 'Full Name: John Doe', 'Full name should match format');

console.assert(person.isAdult() === false, 'Person should not be an adult');

person.celebrateBirthday();
console.assert(person.age === 18, 'Age should be 18 after celebrating birthday');

console.assert(person.greet() === 'Hello, I’m John Doe.', 'Greeting should match format');

console.log('All Person tests passed ✅');
```

---

### Test Code for **LightBulb**

```javascript
const bulb = new LightBulb(60);

console.assert(bulb.wattage === 60, 'Wattage should be 60');
console.assert(bulb.status === 'off', 'Initial status should be off');

bulb.turnOn();
console.assert(bulb.status === 'on', 'Status should be on after turning on');
console.assert(bulb.isOn() === true, 'isOn should return true when on');

bulb.turnOff();
console.assert(bulb.status === 'off', 'Status should be off after turning off');
console.assert(bulb.isOn() === false, 'isOn should return false when off');

console.assert(
  bulb.getDetails() === 'Wattage: 60W, Status: off',
  'Details string should match format'
);

console.log('All LightBulb tests passed ✅');
```
