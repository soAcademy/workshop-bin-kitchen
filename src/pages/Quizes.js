import React, { useState } from "react";
import { datakitchenboeing } from "../datakitchen";
import Nav from "../components/Nav";

const Quizes = () => {
  const quizs = [
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
  ];

  const [toggleQuizs, setToggleQuizs] = useState(
    [...Array(quizs.length)].map(() => false)
  );
  // // เก็บค่าแบบ multiple

  const updateFagToggle = (idx) => {
    const newToggleQuizs = [...toggleQuizs];
    newToggleQuizs[idx] = !toggleQuizs[idx];

    setToggleQuizs(newToggleQuizs);
  };

  return (
    <>
      <Nav />
      {quizs?.map((quiz, idx) => (
        <div
          key={idx}
          onClick={() => updateFagToggle(idx)}
          className="py3 cursor-pointer flex flex-col "
        >
          <div className="bg-rose-400 px-7 py-3 text-white">
            {idx + 1}. {quiz.question} ?
          </div>
          {/* toggle คำตอบ */}
          {toggleQuizs[idx] && (
            <div className="bg-red-200  px-7 py-4">{quiz.answers}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default Quizes;
