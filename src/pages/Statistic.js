import { ChartCountByName } from "../components/ChartCountByName";
import { ChartCountByTable } from "../components/ChartCountByTable";
import { ChartTotalPriceByName } from "../components/ChartTotalPriceByName";

export const Statistic = () => {
  return (
    <>
      <div className="mt-24">
        <ChartCountByName></ChartCountByName>
        <ChartTotalPriceByName></ChartTotalPriceByName>
        <ChartCountByTable></ChartCountByTable>
      </div>
    </>
  );
};
