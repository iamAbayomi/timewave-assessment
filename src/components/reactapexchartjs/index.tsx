import Chart from "react-apexcharts";

interface ApexChartProps {
  chartOptions: any;
}

const ApexChart = ({ chartOptions }: ApexChartProps) => {

  
  return (
    <Chart
      options={chartOptions}
      series={chartOptions?.series}
      type="line"
      height={450}
      width={800}
    />
  );
};

export default ApexChart;
