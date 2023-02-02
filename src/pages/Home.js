import Menu from "./Menu";

export const Home = () => {

  const Title = () => <h1>ร้านอาหารครัวคุณบิน</h1>;
  const Intro = () => (
    <p>
      ร้านอาหารครัวคุณบินปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
      เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
      อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
      เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
      กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ
    </p>
  );
  // console.log(menu);
  return (
    <div className="font-kanit">
      <div className="relative top-16 md:top-20 flex flex-col justify-center items-center py-4 w-11/12 mx-auto ">
        <div className="p-1 max-[300px]:text-xl text-3xl sm:text-5xl md:text-5xl">
          <Title />
        </div>
        <div className="max-[300px]:text-xs text-[13px] px-2 py-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:py-3 md:py-6 lg:py-10 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 sm:p-3 md:p-6 lg:p-10 xl:p-16">
          <Intro />
        </div>
        <div className="rounded-xl my-4 overflow-hidden sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
          <img src="./banner.jpg" className="cover" />
        </div>
        <div className="w-full sm:w-11/12 md:w-11/12 sm:p-3 md:p-6 lg:p-10 xl:p-16"><Menu /></div>
      </div>
    </div>
  );
};
