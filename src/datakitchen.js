import pickitchen from "./assets/thaifood.jpeg";
import hamburgericon from "./assets/menu_ham.png";
import mealicon from "./assets/rabbit_icon.png";
import closeicon from "./assets/closeicon.png";
import like from "./assets/egg.png";
import order from "./assets/order.png";
import binbin from "./assets/binbin.png";

export const datakitchenboeing = {
  datadescription: `ร้านอาหารครัวกาตุ่ยปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
  เราเปิดให้บริการตั้งแต่ 1000 ปีมาแล้วที่เรานำเสนอความ
  อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
  เกษตรกรกระต่ายชาวไร่ในพื้นที่วันเดอแลนด์ ปรุงด้วยสูตรลับต้นตำรับแรงงานกระต่ายที่สืบทอด
  กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`,
  url: pickitchen,
  name: "ครัวกาตุ่ย",
  nav_icon: hamburgericon,
  nav_icon2: mealicon,
  close_icon: closeicon,
  like_icon: like,
  order_icon: order,
  bin_icon: binbin,
  table: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  quizes: [
    {
      question: "ซุปอะไรมีสารอาหารมากที่สุด",
      answers: ["ซุปไก่สกัด", "ซุปหางวัว", "ซุปเปอร์มาเก็ต", "ซุปหูฉลาม"],
      answer: 2,
    },
    {
      question: "เพลง แปดโมงเช้าวันอังคาร ร้องยังไง",
      answers: [
        "แปดโมงเช้าวันอังคาร",
        "รู้บ้างไหมว่าจะไป มันไม่จบแค่นั้น",
        "ประเทศไทยรวมเลือดเนื้อชาติเชื้อไทย…",
        "ไม่อยากรู้วันเวลา เช้าขึ้นมาไม่อยากเจอ",
      ],
      answer: 2,
    },
    {
      question: "จะแบ่งกระทิงแดง 5 ขวดให้คน 2 คนเท่าๆ กันต้องทำไง",
      answers: [
        "แบ่งได้ คนละ 2 ขวด",
        "แบ่งได้ คนละ 2.5 ขวด",
        "แบ่งได้ คนละ 1 ขวด",
        "แบ่งไม่ได้",
      ],
      answer: 0,
    },
    {
      question: "ก่อนจะถึงประเทศอาหลับ ต้องถึงประเทศอะไรก่อน",
      answers: ["เลบานอน", "อิสราเอล", "นิวซีแลนด์", "ออสเตเรีย"],
      answer: 0,
    },
    {
      question: "เกาะ อะไรมีเสาไฟฟ้า เยอะที่สุด",
      answers: ["เกาะสีชัง", "เกาะกลางถนน", "เกาะช้าง", "เกาะเกร็ด"],
      answer: 1,
    },
  ],
};
