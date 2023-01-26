export const Home = () => {
  const Title = () => <h1 className="text-2xl">ร้านอาหารครัวคุณบิน</h1>;
  const Intro = () =>
    <p className="text-[17px] py-4 px-2">
      ร้านอาหารครัวคุณบินปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
      เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
      อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
      เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
      กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ
    </p>
  const BannerPath = () => "../assets/banner.jpg"
  
  return (
  <div className="px-4">
    <div className="flex flex-col justify-center items-center py-4 w-11/12 mx-auto">
      <h1><Title /></h1>
      <Intro />
      <div className="rounded-xl my-4 overflow-hidden">
      <img src="./banner.jpg" className="cover"></img>
      </div>
    </div>
  </div>)
};
