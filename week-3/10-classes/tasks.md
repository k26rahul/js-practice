### 1. **Car**

**Properties:**

- `brand` (string): The car's brand.
- `model` (string): The car's model.
- `year` (number): The car's manufacturing year.
- `speed` (number): The car's current speed (default: 0).

**Methods:**

1. `accelerate(amount)` (number): Increases `speed` by `amount`.
2. `brake(amount)` (number): Decreases `speed` by `amount` but not below 0.
3. `getAge(currentYear)` (number): Returns the car's age (currentYear - year).
4. `getDetails()`: Returns a string in this format: `"Brand: [brand], Model: [model], Year: [year]"`.

**Test Code:**

```javascript
const car = new Car('Toyota', 'Corolla', 2015);
console.log(car.getDetails()); // Brand: Toyota, Model: Corolla, Year: 2015
car.accelerate(20);
console.log(car.speed); // 20
car.brake(5);
console.log(car.speed); // 15
console.log(car.getAge(2025)); // 10
car.brake(20);
console.log(car.speed); // 0
```

---

### 2. **Book**

**Properties:**

- `title` (string): The book's title.
- `author` (string): The book's author.
- `pages` (number): The total number of pages.
- `currentPage` (number): Current reading page (default: 0).

**Methods:**

1. `read(pages)` (number): Adds `pages` to `currentPage`. Does not exceed `pages`.
2. `restart()`: Resets `currentPage` to 0.
3. `getProgress()`: Returns a string like `"Progress: [percentage]% read"`.
4. `getDetails()`: Returns a string in this format: `"Title: [title], Author: [author]"`.

**Test Code:**

```javascript
const book = new Book('1984', 'George Orwell', 328);
console.log(book.getDetails()); // Title: 1984, Author: George Orwell
book.read(50);
console.log(book.currentPage); // 50
book.read(300);
console.log(book.currentPage); // 328
console.log(book.getProgress()); // Progress: 100% read
book.restart();
console.log(book.currentPage); // 0
```

---

### 3. **User**

**Properties:**

- `username` (string): The user's name.
- `email` (string): The user's email.
- `age` (number): The user's age.
- `isActive` (boolean): User's active status (default: false).

**Methods:**

1. `login()`: Sets `isActive` to true.
2. `logout()`: Sets `isActive` to false.
3. `updateEmail(newEmail)` (string): Updates the `email` property.
4. `getDetails()`: Returns a string like `"User: [username], Email: [email], Age: [age]"`.

**Test Code:**

```javascript
const user = new User('john_doe', 'john@example.com', 25);
console.log(user.getDetails()); // User: john_doe, Email: john@example.com, Age: 25
user.login();
console.log(user.isActive); // true
user.logout();
console.log(user.isActive); // false
user.updateEmail('john.doe@gmail.com');
console.log(user.email); // john.doe@gmail.com
```

---

### 4. **Rectangle**

**Properties:**

- `width` (number): The rectangle's width.
- `height` (number): The rectangle's height.

**Methods:**

1. `getArea()`: Returns the area (`width * height`).
2. `getPerimeter()`: Returns the perimeter (`2 * (width + height)`).
3. `resize(newWidth, newHeight)` (number, number): Updates `width` and `height`.
4. `isSquare()`: Returns true if `width` and `height` are equal.

**Test Code:**

```javascript
const rect = new Rectangle(10, 20);
console.log(rect.getArea()); // 200
console.log(rect.getPerimeter()); // 60
rect.resize(15, 15);
console.log(rect.isSquare()); // true
console.log(rect.getArea()); // 225
```

---

### 5. **Animal**

**Properties:**

- `name` (string): The animal's name.
- `species` (string): The animal's species.
- `sound` (string): The sound the animal makes.

**Methods:**

1. `makeSound()`: Returns the `sound` string.
2. `getDetails()`: Returns a string in this format: `"Name: [name], Species: [species]"`.
3. `rename(newName)` (string): Updates the `name` property.
4. `describe()`: Logs `"The [species] [name] says [sound]"`.

**Test Code:**

```javascript
const animal = new Animal('Leo', 'Lion', 'Roar');
console.log(animal.getDetails()); // Name: Leo, Species: Lion
console.log(animal.makeSound()); // Roar
animal.rename('Max');
console.log(animal.name); // Max
animal.describe(); // The Lion Max says Roar
```

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
