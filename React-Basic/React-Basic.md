# ⚛️ React เบื้องต้น (React.dev/learn)
### เส้นทางการเรียนรู้ React อย่างเป็นทางการ

> สร้าง UI ด้วยแนวคิด Component-Based  
> React จะอัปเดตหน้าจออัตโนมัติเมื่อข้อมูลเปลี่ยน

---

## 🔹 1. ทำความรู้จัก React
- React คือ **JavaScript Library สำหรับสร้าง UI**
- ใช้ “Component” เป็นหน่วยย่อยของ UI
- อัปเดตเฉพาะส่วนที่เปลี่ยน (Virtual DOM)

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

---

## 🔹 2. การเขียน Markup ด้วย JSX
- JSX = Syntax ที่เขียน UI เหมือน HTML
- ใช้ `{}` เพื่อแทรกค่า JavaScript
- ต้องมี **แท็กหลัก (Parent)** เดียวครอบทุก element

```jsx
<div>
  <h1>Hello</h1>
  <p>React!</p>
</div>
```

---

## 🔹 3. การใช้ JavaScript ใน JSX
- ใช้ `{}` เพื่อฝังค่าหรือ expression
- ใช้ ternary (`? :`) เพื่อแสดงผลตามเงื่อนไข

```jsx
{isLogin ? <Dashboard /> : <Login />}
```
> ถ้าเงื่อนไขเป็นจริง → ใช้ค่าทางซ้ายของ :
> ถ้าเงื่อนไขเป็นเท็จ → ใช้ค่าทางขวา


---

## 🔹 4. Props (ข้อมูลที่ส่งเข้า Component)
- Props คือค่าที่ส่งจาก **Parent → Child**
- ไม่สามารถแก้ไข props ภายใน component ได้

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
<Welcome name="Nattapong" />
```

---

## 🔹 5. Conditional Rendering
- แสดงผลแบบมีเงื่อนไขด้วย `if`, `&&`, หรือ ternary

```jsx
{isOnline && <span>🟢 Online</span>}
```

---

## 🔹 6. Rendering Lists
- ใช้ `.map()` เพื่อสร้าง element หลายตัวจาก array
- ต้องมี `key` ที่ไม่ซ้ำ

```jsx
<ul>
  {users.map(u => <li key={u.id}>{u.name}</li>)}
</ul>
```

---

## 🔹 7. Pure Components
- Component ควรเป็นฟังก์ชันที่ให้ผลลัพธ์เหมือนเดิมเมื่อรับ input เดิม
- หลีกเลี่ยง side effects ในการ render

---

## 🔹 8. การตอบสนองต่อ Events
- ใช้ `onClick`, `onChange`, `onSubmit` ฯลฯ

```jsx
<button onClick={handleClick}>Click me</button>
```

---

## 🔹 9. State: หน่วยความจำของ Component
- ใช้ `useState` เพื่อเก็บค่าที่เปลี่ยนได้

```jsx
const [count, setCount] = useState(0);
```

- React จะ re-render เมื่อ state เปลี่ยน

---

## 🔹 10. Rendering และ Committing

React ทำงาน 2 ขั้นตอนหลัก
React ไม่ได้ “อัปเดต DOM จริง” ทันทีทุกครั้งที่เราเปลี่ยนค่า state — แต่จะทำผ่าน สองเฟส (phases) เพื่อให้เร็วและมีประสิทธิภาพ
1. **Render Phase:** React คำนวณสิ่งที่จะเปลี่ยน
2. **Commit Phase:** React อัปเดต DOM จริง

### 🧩 ขั้นตอนที่ 1: Render Phase
- React จะ “คำนวณว่า UI ควรเปลี่ยนตรงไหน”
- ใช้ข้อมูลจาก state และ props ใหม่ → สร้าง Virtual DOM tree ใหม่
- ยังไม่แตะต้อง DOM จริงในหน่วยความจำ

```jsx
  // React คำนวณจาก state ใหม่ ว่าจะเปลี่ยนอะไร
  const [count, setCount] = useState(0);
  return <h1>{count}</h1>;
```
> ถ้าเรากดปุ่มเพิ่ม count → React จะจำลอง DOM ใหม่ในหน่วยความจำก่อน
> แล้วเปรียบเทียบกับ DOM เก่าเพื่อหาส่วนที่ต่าง

### 🧩 ขั้นตอนที่ 2: Commit Phase
- React จะ “commit” การเปลี่ยนแปลงนั้นลง DOM จริง (Real DOM)
- จะเปลี่ยนเฉพาะ node ที่ต่าง (ไม่ render ทั้งหน้าใหม่)
- React ทำงานเร็วเพราะใช้ Virtual DOM diffing ก่อน commit

---

## 🔹 11. The UI Tree and Reconciliation

### UI Tree คืออะไร?
> React มอง UI ของเราเป็น ต้นไม้ (tree) ที่มี node ย่อย ๆ
> แต่ละ node = 1 component
```jsx
<App>
 ├── <Header />
 ├── <Content>
 │    ├── <Post />
 │    └── <CommentList />
 └── <Footer />
```

### 🔄 Reconciliation คืออะไร?

- คือกระบวนการที่ React ใช้ เปรียบเทียบ Virtual DOM เก่ากับใหม่
- เพื่อหาว่า “อะไรเปลี่ยนบ้าง” (เรียกว่า diffing algorithm)
- จากนั้น React จะอัปเดตเฉพาะส่วนที่ต่างจริง ๆ
  > 🔍 เช่น ถ้ามีแค่ <p> ตัวหนึ่งเปลี่ยนข้อความ
  > React จะไม่แตะส่วนอื่นของหน้าเลย
📈 ผลลัพธ์: UI อัปเดตเร็วและประหยัดพลังประมวลผลมากกว่าการ re-render ทั้งหน้า
---

## 🔹 12. การแชร์ State ระหว่าง Components
### 📦 ปัญหา:
บางครั้ง component หลายตัวต้องใช้ข้อมูลร่วมกัน เช่น
```jsx
<PlayerScore />
<PlayerLevel />
```
ทั้งคู่ต้องรู้ “คะแนนของผู้เล่น” เดียวกัน

### 🧩 วิธีแก้: Lifting State Up
- ย้าย state จาก component ย่อย ๆ → ไปไว้ที่ Parent
- แล้วส่งข้อมูลผ่าน props ลงไป
```jsx
function Game() {
  const [score, setScore] = useState(0);
  return (
    <>
      <PlayerScore score={score} />
      <PlayerLevel score={score} />
    </>
  );
}

function PlayerScore({ score }) {
  return <h2>Score: {score}</h2>;
}
```
📘 เรียกแนวทางนี้ว่า “Lifting State Up”
เพราะเรา “ยก state ขึ้นไปอยู่สูงกว่า” เพื่อให้ลูกหลายตัวมองเห็นค่าเดียวกันได้

---

## 🔹 13. การคงหรือรีเซ็ต State
### 🧠 React จำค่า state ตาม “ตำแหน่งของ component ใน tree”
- ถ้า component ยังอยู่ตำแหน่งเดิม → React จะ เก็บ state เดิมไว้ (preserve)
- ถ้า component ถูกลบออกหรือลำดับเปลี่ยน → React จะ รีเซ็ต state ใหม่ (reset)
```jsx
function App({ user }) {
  return (
    <div>
      {user ? <Dashboard /> : <LoginForm />}
    </div>
  );
}
```
ถ้า user เปลี่ยนจาก null → object
React จะนำ <LoginForm /> ออก และสร้าง <Dashboard /> ใหม่
→ state ภายใน LoginForm จะถูก reset (เพราะ component ถูกลบออกจาก tree)

💡 นี่คือเหตุผลว่าทำไมบางครั้งเมื่อเราสลับหน้า → ฟอร์มจะ “รีเซ็ตค่า”
---

## 🔹 14. การแยก Component ย่อย
### 🎨 แนวคิด: “แยกส่วน UI ให้ชัดเจนและใช้ซ้ำได้”
> ถ้ามีโค้ด UI ที่ซ้ำหลายที่ — ควรแยกออกมาเป็น component ใหม่

### 🔸 ตัวอย่างก่อนแยก: 
```jsx
<div className="card">
  <h2>React</h2>
  <p>JavaScript library for UI</p>
</div>

<div className="card">
  <h2>Vue</h2>
  <p>Progressive framework</p>
</div>
```

### 🔸 หลังแยกเป็น Component:
```jsx
function Card({ title, desc }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

<Card title="React" desc="JavaScript library for UI" />
<Card title="Vue" desc="Progressive framework" />
```
### ✅ ข้อดี:

- โค้ดสั้นลง
- อ่านง่าย
- ใช้ซ้ำได้ในหลายที่
- แก้ไขเพียงจุดเดียว (component เดียว)
---

## 🔹 15. JSX Children
- สามารถส่ง JSX เป็น “children” เข้าไปได้

```jsx
<Card>
  <Avatar />
  <p>Hello!</p>
</Card>
```

---

## 🔹 16. Custom Hooks
- เขียน logic ซ้ำ ๆ เป็น hook ของตัวเองได้

```jsx
function useAuth() {
  const [user, setUser] = useState(null);
  // logic การ login
}
```

---

## 🔹 17. useReducer
- ใช้กับ state ที่ซับซ้อน
- มีลักษณะคล้าย Redux

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 🔹 18. useEffect
- ทำงานหลัง render เช่น fetch data หรือ sync กับระบบอื่น
- ต้องมี **cleanup function** ป้องกัน memory leak

```jsx
useEffect(() => {
  fetchData();
  return () => cleanup();
}, []);
```

---

## 🔹 19. Lifecycle ของ Component
### 🧠 ความหมายของ Component Lifecycle
> ทุก Component ใน React มี “วงจรชีวิต” (Lifecycle) ตั้งแต่เกิด → แสดงผล → อัปเดต → หายไป
React จะคอยจัดการขั้นตอนเหล่านี้อัตโนมัติ
และเราสามารถ “สอดแทรกโค้ด” ในแต่ละช่วงได้ด้วย React Hooks เช่น useEffect()

### การเรียงลำดับของ Lifecycle โดยสรุป
```
1️⃣ Mounting:
   - สร้าง component
   - Render UI
   - Run useEffect(..., [])

2️⃣ Updating:
   - State หรือ props เปลี่ยน
   - Re-render UI
   - Run useEffect(..., [value])

3️⃣ Unmounting:
   - ลบ component ออกจาก DOM
   - Run cleanup function
```
---

## 🔹 20. Escape Hatches
- สำหรับจัดการกรณีพิเศษ เช่น
  - ใช้ DOM API โดยตรง
  - Integrate กับ library ภายนอก
  - ปรับปรุง performance

---

# 🧭 สรุปภาพรวม

| หมวด | หัวข้อหลัก | แนวคิดสำคัญ |
|------|-------------|--------------|
| 🔰 พื้นฐาน | JSX, Props, Rendering | เขียน UI ด้วย JSX |
| ⚙️ การทำงาน | State, Effect, Reducer | จัดการข้อมูลและ lifecycle |
| 🔄 การเชื่อมโยง | Lifting State, Children | สื่อสารระหว่าง Component |
| 🧠 ขั้นสูง | Custom Hook, Optimization | เขียน logic ใช้ซ้ำได้ |

---

# 🚀 แหล่งอ้างอิง
- React Official Docs: [https://react.dev/learn](https://react.dev/learn)
- บทความโดย Dan Abramov, Meta Open Source
