import React, { useState } from "react";
import { Link } from "react-router-dom";

const Questions = () => {
  const faqs = [
    {
      question: <>ร้านอาหารเปิดกี่โมง</>,
      answer: <>ร้านเราเปิด 12:00 - 20:00 น.</>,
    },
    {
      question: <>เมนูเด็ดๆ ในร้านมีอะไรบ้าง</>,
      answer: <>เมนูแนะนำของร้านเราคือแกงส้มชะอมกุ้ง</>,
    },
    {
      question: <>มีเดลิเวอรี่มั้ย</>,
      answer: <>เรามีบริการส่งผ่าน Line Man, Shopee Food และ Grab</>,
    },
  ];

  const [toggleQA, setToggleQA] = useState(
    [...Array(faqs.length)].map(() => false)
  );

  const openToggleAnswer = (idx) => {
    const newToggles = [...toggleQA];
    newToggles[idx] = !newToggles[idx];
    setToggleQA(newToggles);
  };

  return (
    <div className="px-4 w-full mt-20">
      <Link to="/questions">
        <div className="px-4 mt-10 mb-5 text-lg">คำถามที่พบบ่อย</div>
      </Link>
      {faqs.map((r, idx) => (
        <div key={idx} className="p-4">
          <div
            className="bg-red-100 rounded cursor-pointer h-12 flex items-center pl-2"
            onClick={() => openToggleAnswer(idx)}
          >
            {idx + 1}: {r.question}
          </div>
          {toggleQA[idx] && <div className="bg-red-50 pl-6 pt-2">{r.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Questions;
