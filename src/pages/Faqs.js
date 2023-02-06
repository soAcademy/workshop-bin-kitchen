import { useState } from "react";

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

export const Faqs = () => {
  const [expandedFaqEntries, setExpandedFaqEntries] = useState(
    [...Array(faqs.length).keys()].map((faq) => (faq = false))
  );

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <h1 className="mb-4 font-prompt text-4xl font-bold">คำถามที่พบบ่อย</h1>
      <ul className="mb-4">
        {faqs.map((faq, idx) => (
          <li key={idx} className="mb-4">
            <button
              className="w-full bg-blue-400 p-2 text-left"
              onClick={() => {
                const newExpandedFaqEntries = [...expandedFaqEntries];
                newExpandedFaqEntries[idx] = !expandedFaqEntries[idx];
                setExpandedFaqEntries(newExpandedFaqEntries);
              }}
            >
              {idx + 1}. {faq.question}
            </button>
            <div
              className={`bg-blue-200 p-2 ${
                expandedFaqEntries[idx] ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
