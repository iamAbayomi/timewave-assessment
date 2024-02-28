import React from "react";
import dynamic from "next/dynamic";
import { useFetchPrice } from "@/hooks/fetchPrice";

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

  const chartOptions = {
    chart: {
      type: "line",
      height: 350,
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
      categories: atomData?.times.map((t) => new Date(t).toLocaleDateString())
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
    <div>
      {typeof window !== "undefined" && (
        <ApexChart chartOptions={chartOptions} />
      )}
      <div className="info">
        <span>X-axis: Date</span>
        <span>Y-axis: Price (NTRN)</span>
      </div>
      <div className="info">
        <span>
          Average Price: <span id="averagePrice">{atomData?.average}</span>
        </span>
        <span>
          Max Price: <span id="maxPrice">{atomData?.max}</span>
        </span>
        <span>
          Min Price: <span id="minPrice">{atomData?.min}</span>
        </span>
      </div>
    </div>
  );
};

export default ChartPage;
