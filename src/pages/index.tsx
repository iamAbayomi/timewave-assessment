import React from "react";
import dynamic from "next/dynamic";
import { useFetchPrice } from "@/hooks/fetchPrice";
import { format } from "path";
import { convertToDateAndMonth, formatTime } from "@/utils/helpers";

// Importing ApexChart dynamically to avoid "window is not defined" error
const ApexChart = dynamic(() => import("@/components/reactapexchartjs"), {
  ssr: false
});

interface PriceData {
  price: number;
  timestamp: number;
}

const ChartPage: React.FC = () => {
  const { atomData, ntrnData, isLoading } = useFetchPrice();
  console.log("testDate ", new Date(1708778339));

  const chartOptions = {
    chart: {
      type: "line",
      height: 550,

      toolbar: {
        show: false
      }
    },
    series: [
      {
        name: "$ATOM Price (NTRN)",
        // data: prices,
        data: atomData?.values
      },
      {
        name: "$NTRN Price (NTRN)",
        data: ntrnData?.values
      }
    ],
    xaxis: {
      categories: atomData?.times,
      labels: {
        formatter: function (value: number) {
          console.log(
            "formatter ",
            value,
            formatTime(value),
            " month ",
            formatTime(value)
          );

          return formatTime(value);
        },
        axisBorder: {
          color: "#00000", // Set the color of the x-axis border
          height: 2, // Set the height of the x-axis border
          offsetX: 0 // Set the offset of the x-axis border
        }
      },

      type: "datetime"
    },
    yaxis: {
      title: {
        text: "Price (NTRN)"
      }
    },
    title: {
      text: "Astroport $ATOM-$NTRN 7-Day Price Chart",
      align: "center"
    }
  };

  return (
    <div className="  ">
      <div className={`mx-auto w-full w-[1200px]`}>
        <p className="mt-[60px] text-center text-[3.0rem] font-bold">
          7-day price chart of the <br /> $ATOM-$NTRN pair
        </p>
        <div>
          <div className="mt-[30px] p-[20px] w-max mx-auto bg-[white] rounded-[10px]">
            <div className="flex gap-[10px]">
              <span>
                Average Price:{" "}
                <span id="averagePrice">{(atomData?.average).toFixed(2)}</span>
              </span>
              <span>
                Max Price: <span id="maxPrice">{atomData?.max}</span>
              </span>
              <span>
                Min Price: <span id="minPrice">{atomData?.min}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[30px] p-[20px] w-max mx-auto bg-[white] rounded-[10px]">
          <div className="">
            <ApexChart chartOptions={chartOptions} />
          </div>
        </div>

        <div className="info">
          <span>X-axis: Date</span>
          <span>Y-axis: Price (NTRN)</span>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
