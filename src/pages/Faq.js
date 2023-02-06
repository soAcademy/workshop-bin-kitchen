import faqs from "../assets/faqs";
import { useState } from "react";

const Faqs = () => {
  const [isToggle, setIsToggle] = useState(
    faqs.map(() => {
      return false;
    })
  );
  return (
    <div className="mt-24">
      {faqs.map((e, idx) => {
        return (
          <div className="m-2 z-20 rounded-md overflow-hidden" key={idx}>
            <div
              className="bg-gray-300 z-20 p-2"
              onClick={() => {
                isToggle[idx] = !isToggle[idx];
                const _newToggle = [...isToggle];
                setIsToggle(_newToggle);
              }}
            >
              Question {idx + 1} : {e.question}
            </div>
            {
              <div
                className={`bg-gray-200 duration-500 overflow-hidden z-10 transition-all 
            ${isToggle[idx] ? "max-h-max p-2" : "max-h-0 p-0"}`}
              >
                Answer : {e.answer}
              </div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
