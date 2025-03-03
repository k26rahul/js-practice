### **Solution 1: Callbacks**

```js
function apply(name, age, role, callback) {
  setTimeout(() => {
    console.log(`Application submitted for ${role} by ${name}, age ${age}`);
    callback();
  }, 1000);
}

function pay(amount, bank, callback) {
  setTimeout(() => {
    console.log(`Paid $${amount} via ${bank}`);
    callback();
  }, 1000);
}

function verify(id, callback) {
  setTimeout(() => {
    console.log(`ID ${id} verified`);
    callback();
  }, 1000);
}

function main() {
  apply('Alice', 25, 'Engineer', () => {
    pay(100, 'Bank of JS', () => {
      verify('A12345', () => {
        console.log('Process complete');
      });
    });
  });
}

main();
```

---

### **Solution 2: Promises**

```js
function apply(name, age, role) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`Application submitted for ${role} by ${name}, age ${age}`);
      resolve();
    }, 1000)
  );
}

function pay(amount, bank) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`Paid $${amount} via ${bank}`);
      resolve();
    }, 1000)
  );
}

function verify(id) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`ID ${id} verified`);
      resolve();
    }, 1000)
  );
}

function main() {
  apply('Alice', 25, 'Engineer')
    .then(() => pay(100, 'Bank of JS'))
    .then(() => verify('A12345'))
    .then(() => console.log('Process complete'));
}

main();
```

---

### **Solution 3: Async/Await**

```js
function apply(name, age, role) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`Application submitted for ${role} by ${name}, age ${age}`);
      resolve();
    }, 1000)
  );
}

function pay(amount, bank) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`Paid $${amount} via ${bank}`);
      resolve();
    }, 1000)
  );
}

function verify(id) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`ID ${id} verified`);
      resolve();
    }, 1000)
  );
}

async function main() {
  await apply('Alice', 25, 'Engineer');
  await pay(100, 'Bank of JS');
  await verify('A12345');
  console.log('Process complete');
}

main();
```
