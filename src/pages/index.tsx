import React from "react";
import dynamic from "next/dynamic";
import { useFetchPrice } from "@/hooks/fetchPrice";
import { format } from "path";
import { convertToDateAndMonth, formatTime } from "@/utils/helpers";
import PriceCard from "@/components/pricecard";

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
        data: atomData?.values,
        color: "#030F3C"
      },
      {
        name: "$NTRN Price (NTRN)",
        data: ntrnData?.values,
        color: "#2FB584"
      }
    ],
    xaxis: {
      categories: atomData?.times,
      labels: {
        formatter: function (value: number) {
          return formatTime(value);
        },
        style: {
          fontSize: "12px", // Specify the font size of the x-axis labels
          fontFamily: "Space Grotesk, sans-serif" // Specify the font family of the x-axis labels
        }
      },
      title: {
        text: "Date"
      },
      type: "datetime"
    },
    yaxis: {
      title: {
        text: "Price (NTRN)"
      },
      labels: {
        style: {
          fontSize: "12px", // Specify the font size of the x-axis labels
          fontFamily: "Space Grotesk, sans-serif" // Specify the font family of the x-axis labels
        }
      }
    },
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        options: {
          chart: {
            width: '100%', // Set the width of the chart to 100% when the screen width is less than the breakpoint
            height: '300px' // Set the height of the chart to 300px when the screen width is less than the breakpoint
          }
        }
      }
    ]
    // title: {
    //   text: "Astroport $ATOM-$NTRN 7-Day Price Chart",
    //   align: "center"
    // }
  };

  return (
    <div className="  ">
      <div className={`mx-auto w-full max-w-[880px] px-[20px] pb-[60px]`}>
        <p className="mt-[60px] text-center text-[3.0rem] font-bold">
          7-day price chart of the $ATOM-$NTRN pair
        </p>
        <div className="mt-[60px] w-full max-w-[880px] flex max-sm:flex-col gap-[20px] sm:gap-[40px] justify-between">
          <PriceCard color="" title="Astroport" data={atomData} />
          <PriceCard color="" title="Neutron" data={ntrnData} />
        </div>
        <div className="mt-[30px] p-[20px] w-full mx-auto bg-[white] rounded-[10px]">
         
            <ApexChart chartOptions={chartOptions} />
         
        </div>

        {/* <div className="info">
          <span>X-axis: Date</span>
          <span>Y-axis: Price (NTRN)</span>
        </div> */}
      </div>
    </div>
  );
};

export default ChartPage;
