## Problem Set: Job Application Process (with Parameters)

### **Problem 1: Callbacks**

Create three functions:

- **`apply(name, age, role, callback)`**

  - Uses `setTimeout` (1 second).
  - Prints `"Application submitted for [role] by [name], age [age]"`.
  - Calls `callback()` after finishing.

- **`pay(amount, bank, callback)`**

  - Uses `setTimeout` (1 second).
  - Prints `"Paid $[amount] via [bank]"`.
  - Calls `callback()` after finishing.

- **`verify(id, callback)`**
  - Uses `setTimeout` (1 second).
  - Prints `"ID [id] verified"`.
  - Calls `callback()` after finishing.

In `main()`, call each step in order, passing appropriate values.

---

### **Problem 2: Promises**

Modify Problem 1:

- Each function returns a Promise instead of using callbacks.
- The function signatures remain the same but return a resolved Promise after printing the message.
- Use `.then()` chaining in `main()` to ensure sequential execution.

---

### **Problem 3: Async/Await**

Modify Problem 2:

- Make `main()` an `async` function.
- Use `await` for `apply()`, `pay()`, and `verify()`.
- Pass the necessary arguments while awaiting each step.
