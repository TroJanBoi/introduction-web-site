```jsx
  import React, { useState } from "react";
  
  function LoginStatus() {
    // สร้าง state เพื่อเก็บสถานะการ login
    const [isLogin, setIsLogin] = useState(false);
  
    // ฟังก์ชันสำหรับสลับค่า state
    const toggleLogin = () => {
      setIsLogin(!isLogin);
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        {/* แสดงข้อความตามเงื่อนไข */}
        <h2>{isLogin ? "Welcome back!" : "Please log in"}</h2>
  
        {/* ปุ่มสลับสถานะ */}
        <button onClick={toggleLogin}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
  
  export default LoginStatus;
```
