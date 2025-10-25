# 🧠 Basic JavaScript for Beginners

## 📍 Course Overview

-   **Duration:** 6 Lessons
-   **Goal:**\
    ✔ Understand JavaScript fundamentals\
    ✔ Create interactive web elements\
    ✔ Apply knowledge to Chrome Extensions

------------------------------------------------------------------------

## 🧩 Lesson 1: Introduction to JavaScript

### 🗒️ Concept

JavaScript is a programming language for making web pages interactive
--- displaying alerts, handling buttons, connecting to APIs, etc.

### 🧪 Example

``` js
alert("Hello! This is your first JavaScript code");
console.log("Hello from the console!");
```

### 💡 Exercise

1.  Show an alert that says "Welcome to JavaScript!"\
2.  Use `console.log()` to print your name.

------------------------------------------------------------------------

## ⚙️ Lesson 2: Variables and Data Types

### 🗒️ Concept

Use `let`, `const`, or `var` to store values.

``` js
let name = "Nattapong";  // string
const age = 25;          // number
let isStudent = true;    // boolean
```

**Common Data Types**\
\| Type \| Example \| \
|------\|----------\| \
| String \| `"Hello"` \|\
| Number \| `25`, `3.14` \| \
| Boolean \| `true`, `false` \| \
| Array \| `["red", "green", "blue"]` \| \
| Object \| `{ name: "John", age: 30 }` \|

### 💡 Exercise

Create variables `myName`, `myAge`, and `isLearningJS` then print them.

------------------------------------------------------------------------

## 🔁 Lesson 3: Conditions and Loops

### 🗒️ Concept

Use **if-else** for conditions and **for/while** for loops.

``` js
let score = 80;
if (score >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

for (let i = 1; i <= 5; i++) {
  console.log("Round", i);
}
```

### 💡 Exercise

1.  If `age` \> 18 → print "Adult", else "Youth"\
2.  Use a `for` loop to print numbers 1--10.

------------------------------------------------------------------------

## 🧱 Lesson 4: Functions

### 🗒️ Concept

Functions are reusable blocks of code.

``` js
function sayHi(name) {
  console.log("Hello " + name);
}

sayHi("Aom");
```

Arrow function:

``` js
const add = (a, b) => a + b;
console.log(add(5, 3));
```

### 💡 Exercise

1.  Create `greet(name)` → prints "Hello, name!"\
2.  Create `multiply(x, y)` → returns product.

------------------------------------------------------------------------

## 🌐 Lesson 5: DOM Interaction

### 🗒️ Concept

DOM (Document Object Model) represents HTML structure you can control.

``` html
<button id="myBtn">Click me</button>
<script>
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", () => {
    alert("Button clicked!");
  });
</script>
```

### 💡 Exercise

1.  Create a button and a paragraph in HTML.\
2.  When clicking the button, change paragraph text to "Hello
    JavaScript!"

------------------------------------------------------------------------

## ⏳ Lesson 6: Async & Await

### 🗒️ Concept

Use `async/await` to handle delayed actions.

``` js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start...");
  await sleep(1000);
  console.log("1 second passed!");
}

run();
```

### 💡 Exercise

Write a function `countdown()` that counts down from 5 → 1, pausing 1s
each time.

------------------------------------------------------------------------

## 🎯 Summary

You've learned: ✅ Variables / Functions / Conditions / Loops\
✅ DOM and events\
✅ Async/Await and timing control\
✅ Foundation for building Chrome Extensions
