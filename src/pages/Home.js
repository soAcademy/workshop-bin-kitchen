import { Menu } from "./Menu";

export const Home = () => {
  const Title = () => <h1>ร้านอาหารครัวคุณด๋อย</h1>;
  const Intro = () => (
    <p>
      ร้านอาหารครัวคุณด๋อยปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
      เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
      อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
      เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
      กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ
    </p>
  );
  // console.log(menu);
  return (
    <div className="font-kanit">
      <div className="relative top-16 mx-auto flex w-11/12 flex-col items-center justify-center py-4 md:top-20 ">
        <div className="max-[300px]:text-xl p-1 text-3xl sm:text-5xl md:text-5xl">
          <Title />
        </div>
        <div className="max-[300px]:text-xs px-2 py-2 text-[13px] sm:w-10/12 sm:p-3 sm:py-3 sm:text-lg md:w-9/12 md:p-6 md:py-6 md:text-xl lg:w-8/12 lg:p-10 lg:py-10 lg:text-2xl xl:w-7/12 xl:p-16 xl:text-3xl 2xl:w-6/12">
          <Intro />
        </div>
        <div className="my-4 overflow-hidden rounded-xl sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
          <img src="./banner.jpg" className="cover" />
        </div>
        <div className="w-full relative flex justify-center">
          <Menu />
        </div>
      </div>
    </div>
  );
};
