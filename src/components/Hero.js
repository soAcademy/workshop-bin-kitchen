import banner from "../assets/hero-image-2x.png";

const heroContent = {
  title: "ร้านอาหารครัวคุณเก่ง",
  description: `ร้านอาหารครัวคุณเก่งปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
เราเปิดให้บริการตั้งแต่ปี พ.ศ. 2566 กว่า 0 ปีที่เรานำเสนอความ
อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`,
};

const Hero = () => (
  <>
    <h1 className="mb-4 font-prompt text-4xl font-bold">{heroContent.title}</h1>
    <p className="mb-4">{heroContent.description}</p>
    <img src={banner} alt="Food" className="m-auto mb-4 w-full rounded-xl" />
  </>
);

export default Hero;