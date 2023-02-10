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
          <div className="z-20 m-2 overflow-hidden rounded-md" key={idx}>
            <div
              className="z-20 bg-gray-300 p-2"
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
                className={`z-10 overflow-hidden bg-gray-200 transition-all duration-500 
            ${isToggle[idx] ? "max-h-max p-2" : "max-h-0 p-0 px-2"}`}
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
