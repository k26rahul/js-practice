### **Solution Code for Car**

```javascript
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
  }

  brake(amount) {
    this.speed = this.speed - amount >= 0 ? this.speed - amount : 0;
  }

  getAge(currentYear) {
    return currentYear - this.year;
  }

  getDetails() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }
}
```

---

### **Solution Code for Book**

```javascript
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = 0;
  }

  read(pagesRead) {
    this.currentPage = Math.min(this.currentPage + pagesRead, this.pages);
  }

  restart() {
    this.currentPage = 0;
  }

  getProgress() {
    const progress = (this.currentPage / this.pages) * 100;
    return `Progress: ${Math.round(progress)}% read`;
  }

  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}
```

---

### **Solution Code for User**

```javascript
class User {
  constructor(username, email, age) {
    this.username = username;
    this.email = email;
    this.age = age;
    this.isActive = false;
  }

  login() {
    this.isActive = true;
  }

  logout() {
    this.isActive = false;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  getDetails() {
    return `User: ${this.username}, Email: ${this.email}, Age: ${this.age}`;
  }
}
```

---

### **Solution Code for Rectangle**

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }

  isSquare() {
    return this.width === this.height;
  }
}
```

---

### **Solution Code for Animal**

```javascript
class Animal {
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    return this.sound;
  }

  getDetails() {
    return `Name: ${this.name}, Species: ${this.species}`;
  }

  rename(newName) {
    this.name = newName;
  }
}
```

---

### **Solution Code for BankAccount**

```javascript
class BankAccount {
  constructor(accountNumber) {
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }

  transfer(amount, anotherAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      anotherAccount.deposit(amount);
    }
  }
}
```

---

### **Solution Code for Movie**

```javascript
class Movie {
  constructor(title, director, releaseYear) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.ratings = [];
  }

  addRating(rating) {
    if (rating >= 1 && rating <= 10) {
      this.ratings.push(rating);
    }
  }

  getAverageRating() {
    if (this.ratings.length === 0) {
      return 'No ratings yet';
    }
    const total = this.ratings.reduce((sum, rating) => sum + rating, 0);
    return total / this.ratings.length;
  }

  getDetails() {
    return `Title: ${this.title}, Directed by: ${this.director}`;
  }

  isClassic(currentYear) {
    return currentYear - this.releaseYear > 25;
  }
}
```

---

### **Solution Code for Product**

```javascript
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  purchase(quantity) {
    if (quantity <= this.stock) {
      this.stock -= quantity;
    }
  }

  restock(quantity) {
    this.stock += quantity;
  }

  getDetails() {
    return `Product: ${this.name}, Price: $${this.price}`;
  }

  isAvailable() {
    return this.stock > 0;
  }
}
```

---

### **Solution Code for Person**

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `Full Name: ${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }

  celebrateBirthday() {
    this.age += 1;
  }

  greet() {
    return `Hello, I’m ${this.firstName} ${this.lastName}.`;
  }
}
```

---

### **Solution Code for LightBulb**

```javascript
class LightBulb {
  constructor(wattage) {
    this.wattage = wattage;
    this.status = 'off';
  }

  turnOn() {
    this.status = 'on';
  }

  turnOff() {
    this.status = 'off';
  }

  isOn() {
    return this.status === 'on';
  }

  getDetails() {
    return `Wattage: ${this.wattage}W, Status: ${this.status}`;
  }
}
```
