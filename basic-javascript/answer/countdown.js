
// countdown.js
// ---------------------------
// นับถอยหลังจาก 5 → 1 โดยรอ 1 วิ ต่อรอบ
// ---------------------------

// ฟังก์ชันหน่วงเวลา (sleep)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ฟังก์ชันหลัก: นับถอยหลัง
async function countdown() {
  for (let i = 5; i > 0; i--) {
    console.log(i);
    await sleep(1000); // รอ 1 วินาที
  }
  console.log("🎉 GO!");
}

// เรียกใช้งาน
countdown();
