import { useEffect, useState } from "react";

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

const Faq = () => {
  const [toggles, settoggles] = useState([
    ...Array(faqs.length).map((r) => false),
  ]);

  const checkIndexToggle = (idx) => {
    // console.log(idx, toggle);
    const newToggles = [...toggles];
    newToggles[idx] = !toggles[idx];

    settoggles(newToggles);
  };

  return (
    <div className="w-full md:flex justify-center font-prompt pt-20 p-4">
      <div className="w-full flex justify-center p-4">
        <div className="w-full md:w-1/2 text-sm">
          <h1 className="text-center text-3xl mb-4">FAQ?</h1>
          {faqs?.map((faq, idx) => (
            <div className="m-1" key={idx}>
              <div
                className="cursor-pointer bg-green-100 rounded-t-lg  p-2"
                onClick={() => checkIndexToggle(idx)}
              >
                {idx + 1}. {faq.question}
              </div>
              {toggles[idx] && (
                <div className="bg-gray-50 rounded-b-lg p-6 pt-0">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
