## Problem Set: Job Application Process

### **Problem 1: Callbacks**

Create three functions: `apply()`, `pay()`, and `verify()`. Each function:

- Uses `setTimeout` to simulate a delay (1 second).
- Prints a message when done.
- Takes a callback and calls it after finishing.

In `main()`, call `apply()`, then `pay()`, then `verify()`, ensuring each runs only after the previous step finishes.

---

### **Problem 2: Promises**

Modify Problem 1:

- Each function now returns a Promise instead of using callbacks.
- Resolve the Promise after printing the message.

In `main()`, use `.then()` chaining to execute `apply()`, then `pay()`, then `verify()`.

---

### **Problem 3: Async/Await**

Modify Problem 2:

- Make `main()` an `async` function.
- Use `await` for `apply()`, `pay()`, and `verify()` instead of `.then()`.
