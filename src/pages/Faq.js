import {useState} from "react"

const Faq = () => {
  const faqs = [
    {
      question: <>ร้านอาหารเปิดกี่โมง</>,
      answer: <>ร้านเราเปิด 12:00 - 20:00 น.</>
    },
    {
      question: <>เมนูเด็ดๆ ในร้านมีอะไรบ้าง</>,
      answer: <>เมนูแนะนำของร้านเราคือแกงส้มชะอมกุ้ง</>
    },
    {
      question: <>มีเดลิเวอรี่มั้ย</>,
      answer: <>เรามีบริการส่งผ่าน Line Man, Shopee Food และ Grab</>
    }
  ]

  const [toggles, setToggles] = useState(
    [...Array(faqs.length)].map(() => false)
  );

  const updateAns = (index) => {
    console.log("toggles",toggles)
    const newToggles = [...toggles]
    console.log("newToggles:",newToggles)
    console.log("index",index)
    newToggles[index] = !newToggles[index];
    console.log("newToggles",newToggles)

    setToggles(newToggles);
  };

  return (
    <div className="py-28">
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className="py-2 cursor-pointer text-4xl text-black-500"
          onClick={() => updateAns(index)}
        >
          <div className="bg-yellow-500">
            Q{index + 1}.{faq.question}
          </div>
          {toggles[index] && (
            <div className="bg-white-500">
              A{index + 1}.{faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq