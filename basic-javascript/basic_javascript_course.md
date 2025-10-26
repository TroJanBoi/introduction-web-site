# 🧠 Basic JavaScript for Beginners

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

### 1. var — แบบเก่า (ยุคก่อน ES6)
### ลักษณะสำคัญ
- ไม่มีการจำกัดขอบเขตใน block {} (ใช้ได้ทั่วฟังก์ชัน)
- สามารถประกาศซ้ำชื่อเดิมได้โดยไม่ error

### 🧪 ตัวอย่าง
``` js
var x = 10;
var x = 20; // ✅ ไม่มี error
console.log(x); // 20

if (true) {
  var y = 5;
}
console.log(y); // ✅ ใช้ได้แม้อยู่นอก if → 5
```

### 2. let — แบบใหม่ (แนะนำ)
### - ลักษณะสำคัญ
- มี block scope → ตัวแปรอยู่ได้แค่ใน { } ที่มันถูกประกาศ
- ไม่สามารถประกาศซ้ำชื่อใน scope เดียวกันได้
- ค่าภายในสามารถเปลี่ยนได้

### 🧪 ตัวอย่าง
``` js
let a = 10;
a = 15; // ✅ เปลี่ยนค่าได้
console.log(a); // 15

if (true) {
  let b = 5;
  console.log(b); // ✅ ใช้ได้ใน block
}
console.log(b); // ❌ error: b is not defined
```

### 3. const — ค่าคงที่
### - ลักษณะสำคัญ
- เหมือน let ตรงที่มี block scope
- ❌ แต่ “ไม่สามารถเปลี่ยนค่าหลังประกาศได้”
- ใช้ประกาศค่าคงที่ เช่น PI, URL, config ฯลฯ

### 🧪 ตัวอย่าง
``` js
const PI = 3.14;
// PI = 3.1415; ❌ Error: Assignment to constant variable

const person = { name: "John", age: 25 };
person.age = 26; // ✅ เปลี่ยน property ได้ (เพราะ object ไม่ใช่ค่าคงที่จริง)
console.log(person.age); // 26
```

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

```
JavaScript เป็นภาษา **Single Thread** --- ทำงานทีละคำสั่ง\
แต่บางคำสั่งต้อง "รอเวลา" เช่น โหลดข้อมูลจาก server, อ่านไฟล์,
หรือรอผู้ใช้กดปุ่ม\
ถ้าไม่มีระบบรอ → โปรแกรมจะทำต่อทันที โดยไม่รอผลลัพธ์
```

### 🕹️ ตัวอย่างปัญหา (ไม่ใช้ async/await)

``` js
console.log("เริ่มโหลดข้อมูล...");

setTimeout(() => {
  console.log("โหลดข้อมูลเสร็จ!");
}, 2000);

console.log("จบโปรแกรม");
```

**ผลลัพธ์:**

```
    เริ่มโหลดข้อมูล...
    จบโปรแกรม
    โหลดข้อมูลเสร็จ!

```

> เพราะ `setTimeout()` เป็น async → ไม่รอเสร็จก่อนข้ามไป


### 🧩 วิธีเก่า (Promise)

``` js
function loadData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("โหลดเสร็จแล้ว"), 2000);
  });
}

loadData()
  .then(result => console.log(result))
  .catch(err => console.error(err));

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

### Promise คืออะไร?

```
Promise คือ “กล่องสัญญา” ที่จะบอกว่า
“งานนี้อาจยังไม่เสร็จตอนนี้ แต่จะเสร็จแน่ในอนาคต” ✅
```

### 🌈 วิธีสมัยใหม่ (Async / Await)

``` js
async function run() {
  console.log("กำลังโหลด...");
  const result = await loadData();
  console.log(result);
  console.log("โหลดเสร็จ!");
}
```

> คำว่า `async` ทำให้ฟังก์ชันคืนค่าเป็น Promise\
> คำว่า `await` หมายถึง "รอผลลัพธ์ของ Promise ก่อนทำต่อ"

### 🧩 จัดการ Error ด้วย try/catch

``` js
async function fetchData() {
  try {
    const res = await fetch("https://wrong.url");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("เกิดข้อผิดพลาด:", err.message);
  }
}
fetchData();
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
