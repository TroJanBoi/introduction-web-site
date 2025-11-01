# ⚛️ React คืออะไร?

React คือ JavaScript library (ไม่ใช่ framework)
ที่สร้างขึ้นโดยบริษัท Meta (Facebook)
ใช้สำหรับสร้าง User Interface (UI) หรือ หน้าจอแสดงผลของเว็บแอปพลิเคชัน
React ช่วยให้นักพัฒนาสามารถสร้าง UI ที่ซับซ้อน ได้ด้วยการแยกออกเป็นส่วนย่อย ๆ ที่เรียกว่า Components


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
1. **Render Phase:** React คำนวณสิ่งที่จะเปลี่ยน
2. **Commit Phase:** React อัปเดต DOM จริง

---

## 🔹 11. Virtual DOM & Reconciliation
- React สร้าง “Virtual DOM” เพื่อเปรียบเทียบกับของเดิม
- อัปเดตเฉพาะส่วนที่เปลี่ยนจริง ๆ

---

## 🔹 12. การแชร์ State ระหว่าง Components
- ย้าย state ขึ้น “Parent” แล้วส่งผ่าน props ลงไป
- เรียกว่า **Lifting State Up**

---

## 🔹 13. การคงหรือรีเซ็ต State
- React จำ state ตามตำแหน่งของ component
- ถ้าลำดับเปลี่ยน → state จะถูก reset

---

## 🔹 14. การแยก Component ย่อย
- แยก UI ออกเป็นส่วนเล็ก ๆ เพื่อความชัดเจนและใช้ซ้ำได้

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
- Mount → Update → Unmount
- ใช้ `useEffect` เพื่อจัดการช่วงเหล่านี้

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
