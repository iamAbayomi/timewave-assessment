import { encodedData } from "@/utils/dummydata";
import {
  extractTimeAndValueFromDataArray,
  getGraphData
} from "@/utils/helpers";
import { useQuery } from "react-query";

export const useFetchPrice = () => {
  const fetchPrice = async () => {
    const response = await fetch(
      `https://app.astroport.fi/api/trpc/charts.prices?input=${encodedData}`
    );
    const data = await response.json();
    return data;
  };

  const { data, isLoading } = useQuery(["fetchPrice"], fetchPrice);

  const atomData = getGraphData(
    data?.result?.data?.json[
      "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9"
    ]?.series
  );
  const ntrnData = getGraphData(data?.result?.data?.json["untrn"]?.series);

  return {
    atomData,
    ntrnData,
    isLoading
  };
};
