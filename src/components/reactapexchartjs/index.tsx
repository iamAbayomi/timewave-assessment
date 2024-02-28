import Chart from "react-apexcharts";

interface ApexChartProps {
  chartOptions: any;
}

const ApexChart = ({ chartOptions }: ApexChartProps) => {
  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartOptions?.series}
        type="line"
        height={550}
        width={800}
      />
    </div>
  );
};

export default ApexChart;
