import React, {useState} from "react";
const Faqs = () => {
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

  const [toggles, setToggles] =useState(
    [...Array(faqs.length)]
  )

  return (
    <>
    <div className="mt-12">
      {faqs.map((faq, index) => (
        <div>
          <div className="bg-green-300" key={index}>
            {index + 1}.{faq.question}
          </div>
          <div className="bg-gray-300">{faq.answer}</div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Faqs;