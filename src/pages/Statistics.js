import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <div className="px-4 w-full">
      <div className="h-14 mt-20">
        <Link to="/stats">
          <p className="font-normal font-[Prompt] text-3xl text-center">
            สถิติ
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Stats;
