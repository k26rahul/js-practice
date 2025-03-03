### **Solution 1: Callbacks**

```js
function apply(callback) {
  setTimeout(() => {
    console.log('Application submitted');
    callback();
  }, 1000);
}

function pay(callback) {
  setTimeout(() => {
    console.log('Payment completed');
    callback();
  }, 1000);
}

function verify(callback) {
  setTimeout(() => {
    console.log('Documents verified');
    callback();
  }, 1000);
}

function main() {
  apply(() => {
    pay(() => {
      verify(() => {
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
function apply() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('Application submitted');
      resolve();
    }, 1000)
  );
}

function pay() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('Payment completed');
      resolve();
    }, 1000)
  );
}

function verify() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('Documents verified');
      resolve();
    }, 1000)
  );
}

function main() {
  apply()
    .then(pay)
    .then(verify)
    .then(() => console.log('Process complete'));
}

main();
```

---

### **Solution 3: Async/Await**

```js
function apply() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('Application submitted');
      resolve();
    }, 1000)
  );
}

function pay() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('Payment completed');
      resolve();
    }, 1000)
  );
}

function verify() {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('Documents verified');
      resolve();
    }, 1000)
  );
}

async function main() {
  await apply();
  await pay();
  await verify();
  console.log('Process complete');
}

main();
```
