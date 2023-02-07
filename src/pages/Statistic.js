import { ChartCountByName } from "../components/ChartCountByName";
import { ChartTotalPriceByName } from "../components/ChartTotalPriceByName";

export const Statistic = () => {
  return (
    <>
      <div className="mt-24">
        <ChartCountByName></ChartCountByName>
        <ChartTotalPriceByName></ChartTotalPriceByName>
      </div>
    </>
  );
};
