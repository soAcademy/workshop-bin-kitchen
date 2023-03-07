import React, { useEffect, useState } from "react";

export const Faq = () => {
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

  const [toggles, setToggles] = useState(
    [...Array(faqs.length)].map(() => false)
  );
  console.log(toggles);
  const updateFaqToggles = (idx) => {
    const newToggles = [...toggles];
    newToggles[idx] = !newToggles[idx];
    setToggles(newToggles);
  };

  return (
    <>
      <div className="pt-20">
        {faqs?.map((r, idx) => (
          <div
            className="my-3 cursor-pointer"
            onClick={() => {
              updateFaqToggles(idx);
            }}
          >
            <div className="bg-green-200">
              Q{idx + 1} : {r.question}
            </div>
            {toggles[idx] && <div className="bg-white">{r.answer}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
