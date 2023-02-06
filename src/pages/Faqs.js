import { useState } from "react";

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

  const [toggles, setToggles] = useState(
    [...Array(faqs.length)].map(() => false)
  );

  const updateFaqToggle = (index) => {
    // useState
    // console.log("toggles",toggles);
    // onClick
    // console.log("index", index);

    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];

    console.log("newToggles", newToggles);

    setToggles(newToggles);
  };

  return (
    <>
      <div className="pt-10"></div>
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className="py-2 cursor-pointer"
          onClick={() => updateFaqToggle(index)}
        >
          <div className="bg-green-300">
            {index + 1}. {faq.question}
          </div>
          {toggles[index] && <div className="bg-gray-200">{faq.answer}</div>}
        </div>
      ))}
    </>
  );
};

export default Faqs;
