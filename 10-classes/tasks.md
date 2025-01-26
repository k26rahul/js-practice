### 6. **BankAccount**

**Properties:**

- `accountNumber` (string): The account's unique number.
- `balance` (number): The current balance (default: 0).

**Methods:**

1. `deposit(amount)` (number): Increases `balance` by `amount`.
2. `withdraw(amount)` (number): Decreases `balance` by `amount` if `amount <= balance`, otherwise does nothing.
3. `getBalance()`: Returns the current `balance`.
4. `transfer(amount, anotherAccount)` (number, BankAccount): Transfers `amount` to another `BankAccount` object if `amount <= balance`.

**Test Code:**

```javascript
const acc1 = new BankAccount('12345');
const acc2 = new BankAccount('67890');
acc1.deposit(100);
console.log(acc1.getBalance()); // 100
acc1.withdraw(50);
console.log(acc1.getBalance()); // 50
acc1.transfer(30, acc2);
console.log(acc1.getBalance()); // 20
console.log(acc2.getBalance()); // 30
```

---

### 7. **Movie**

**Properties:**

- `title` (string): The movie's title.
- `director` (string): The movie's director.
- `releaseYear` (number): The release year of the movie.
- `ratings` (array of numbers): List of ratings (default: empty).

**Methods:**

1. `addRating(rating)` (number): Adds a rating (1-10) to the `ratings` array.
2. `getAverageRating()`: Returns the average of `ratings`, or "No ratings yet" if none.
3. `getDetails()`: Returns a string like `"Title: [title], Directed by: [director]"`.
4. `isClassic(currentYear)` (number): Returns true if `currentYear - releaseYear > 25`.

**Test Code:**

```javascript
const movie = new Movie('Inception', 'Christopher Nolan', 2010);
console.log(movie.getDetails()); // Title: Inception, Directed by: Christopher Nolan
movie.addRating(9);
movie.addRating(8);
console.log(movie.getAverageRating()); // 8.5
console.log(movie.isClassic(2025)); // False
movie.addRating(10);
console.log(movie.ratings); // [9, 8, 10]
```

---

### 8. **Product**

**Properties:**

- `name` (string): The product's name.
- `price` (number): The product's price.
- `stock` (number): The number of items available.

**Methods:**

1. `purchase(quantity)` (number): Reduces `stock` by `quantity` if `quantity <= stock`. Otherwise, does nothing.
2. `restock(quantity)` (number): Increases `stock` by `quantity`.
3. `getDetails()`: Returns a string like `"Product: [name], Price: $[price]"`.
4. `isAvailable()`: Returns true if `stock > 0`.

**Test Code:**

```javascript
const product = new Product('Laptop', 1200, 10);
console.log(product.getDetails()); // Product: Laptop, Price: $1200
console.log(product.isAvailable()); // true
product.purchase(3);
console.log(product.stock); // 7
product.restock(5);
console.log(product.stock); // 12
product.purchase(15);
console.log(product.stock); // 12
```

---

### 9. **Person**

**Properties:**

- `firstName` (string): The person's first name.
- `lastName` (string): The person's last name.
- `age` (number): The person's age.

**Methods:**

1. `getFullName()`: Returns a string like `"Full Name: [firstName] [lastName]"`.
2. `isAdult()`: Returns true if `age >= 18`.
3. `celebrateBirthday()`: Increases `age` by 1.
4. `greet()`: Returns `"Hello, I’m [firstName] [lastName]."`.

**Test Code:**

```javascript
const person = new Person('John', 'Doe', 17);
console.log(person.getFullName()); // Full Name: John Doe
console.log(person.isAdult()); // false
person.celebrateBirthday();
console.log(person.age); // 18
console.log(person.greet()); // Hello, I’m John Doe.
```

---

### 10. **LightBulb**

**Properties:**

- `wattage` (number): The light bulb's wattage.
- `status` (string): The current state of the bulb ("on" or "off", default: "off").

**Methods:**

1. `turnOn()`: Sets `status` to `"on"`.
2. `turnOff()`: Sets `status` to `"off"`.
3. `isOn()`: Returns true if `status` is `"on"`.
4. `getDetails()`: Returns a string like `"Wattage: [wattage]W, Status: [status]"`.

**Test Code:**

```javascript
const bulb = new LightBulb(60);
console.log(bulb.getDetails()); // Wattage: 60W, Status: off
bulb.turnOn();
console.log(bulb.isOn()); // true
console.log(bulb.getDetails()); // Wattage: 60W, Status: on
bulb.turnOff();
console.log(bulb.isOn()); // false
```
