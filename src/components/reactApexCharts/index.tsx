import Chart from "react-apexcharts";
import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import { ICustomDate, IEventsCategory } from "@/utils/types/graph";
import { findEventName } from "@/utils/helpers";
import { convertToDateMonthAndYear, reformatDate } from "@/utils/helpers/date";

interface props extends ApexOptions {
	type:
		| "line"
		| "area"
		| "bar"
		| "pie"
		| "donut"
		| "radialBar"
		| "scatter"
		| "bubble"
		| "heatmap"
		| "candlestick"
		| "boxPlot"
		| "radar"
		| "polarArea"
		| "rangeBar"
		| "rangeArea"
		| "treemap";
	xAxisData: any[];
	yAxisData: any[];
	xaxisType: "category" | "datetime" | "numeric" | undefined;
	marker?: ICustomDate[];
	eventsData?: IEventsCategory[];
	graphColor?: string;
	graphStrokeColor?: string;
	width?: string;
	height?: string;
	filter?: string;
	offsetX?: number;
	xAxisTickAmount?: number;
}

const ApexLineCharts = ({
	type,
	xAxisData,
	yAxisData,
	xaxisType = "category",
	marker,
	eventsData,
	graphColor = "#86EFAC",
	graphStrokeColor = "#22C55E",
	width,
	height,
	filter,
	offsetX = 0,
	xAxisTickAmount,
	...rest
}: props) => {
	const [showAnnotations, setShowAnnotations] = useState<boolean>(true);

	// eslint-disable-next-line no-unused-vars
	function toggleAnnotations() {
		console.log("showAnnotaions in the method ", showAnnotations);
		setShowAnnotations(!showAnnotations);
	}

	const options: ApexOptions = {
		chart: {
			id: "apex",
			toolbar: {
				show: false,
			},
		},
		annotations: {
			// points:
			//   marker?.map((item) => ({
			//     x: item?.date.toString(),
			//     y: item?.item,
			//     marker: {
			//       size: 5,
			//       fillColor: 'white',
			//       strokeColor: graphStrokeColor,
			//       strokeWidth: 2,
			//       radius: 2,
			//       cssClass: 'graph-styles'
			//     }
			//   })) || []
			xaxis:
				marker?.map((item) => ({
					x: item?.date.toString(),
					// borderColor: graphStrokeColor,
					// opacity: 0.1,
					label: {
						style: {
							color: "#ffffff",
							background: graphStrokeColor,
							cssClass: "annotations-rounded",
							fontSize: "9",
							//`${showAnnotations ? 'opacity-1' : 'opacity-0'}`
						},
						// orientation: 'horizontal',
						borderRadius: 20,
						mouseEnter: (data: any) => {
							console.log("data ", data);
							toggleAnnotations();
							return data;
						},
						offsetX: 5,

						// text: _formatDateTime(item?.date, 'DD-MM-YYYY')
						// text: toPascalCase(item.event_marker ?? '')
						text: ".",
					},
				})) || [],
		},
		xaxis: {
			categories: xAxisData,
			axisBorder: {
				strokeWidth: 0,
				show: false,
			},
			axisTicks: {
				show: false,
			},
			tickAmount: xAxisTickAmount,
			tickPlacement: "on",
			labels: {
				//rotate: ,
				rotateAlways: false,
				style: {
					fontWeight: "300",
					fontSize: "11px",
					cssClass: "x-axis-react-chart",
				},
				formatter(value) {
					let date;
					if (xaxisType == "datetime") {
						date = reformatDate(value, filter!);
					} else {
						date = value;
					}
					return date;
				},
				offsetX: offsetX,

				//  trim: true,
				hideOverlappingLabels: true,
			},
			type: xaxisType,
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return value.toString();
				},
				// show: false,
			},
			axisTicks: {
				// show: false,
				show: true,
			},
			show: true,
		},
		dataLabels: {
			enabled: false,
		},
		grid: {
			show: false,
		},
		fill: {
			colors: [graphColor, "#22C55E"],
		},
		stroke: {
			colors: [graphStrokeColor],
			width: 2,
		},
		markers: {
			colors: ["white"],
			strokeColors: graphStrokeColor,
			width: 2,
			strokeWidth: 1,
		},
		tooltip: {
			custom: function ({ series, seriesIndex, dataPointIndex }) {
				const event_name =
					marker?.find(
						(item) => item.item == yAxisData[dataPointIndex]
					)?.event_marker ??
					findEventName(
						eventsData ?? [],
						xAxisData[dataPointIndex]
					) ??
					`${series[seriesIndex][dataPointIndex].toFixed(2)} 
          `;

				const xAxisName = `${getDate(xAxisData[dataPointIndex])}`;

				return (
					`<div class="arrow-box" style="background-color:${graphStrokeColor}">` +
					'<p class="taps capitalize">' +
					//     series[seriesIndex][dataPointIndex].toFixed(2) +
					event_name +
					"</p>" +
					'<p class="taps">' +
					//     series[seriesIndex][dataPointIndex].toFixed(2) +
					xAxisName +
					"</p>" +
					"</div>"
				);
			},
			intersect: false,
			onDatasetHover: {
				highlightDataSeries: false,
			},
			marker: {
				show: false,
			},
		},
	};

	const series = [
		{
			name: "series",
			data: yAxisData,
		},
	];

	const getDate = (value: string) => {
		if (xaxisType == "datetime") {
			return convertToDateMonthAndYear(value);
		} else {
			return value;
		}
	};

	return (
		<div>
			<Chart
				type={type}
				options={options}
				series={series}
				width={width}
				height={height}
			/>
		</div>
	);
};

export default ApexLineCharts;
