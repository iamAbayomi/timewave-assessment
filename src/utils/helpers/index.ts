import dayjs from "dayjs";

export const extractTimeAndValueFromDataArray = (dataArray: IGraph[])=> {
    const times: Date[] = [];
    const values: number[] = [];

    dataArray?.forEach((data) => {
        times.push(data.time);
        values.push(data.value);
    });

    console.log("times ", times);
    return {times, values};
};

export const getAveragePrice = (values: number[]): number => {
    return values.reduce((a, b) => a + b, 0) / values.length;
}

export const getMaxPrice = (values: number[]): number => {
    return Math.max(...values);
}

export const getMinPrice = (values: number[]): number => {
    return Math.min(...values);
}

export const getGraphData = (dataArray: IGraph[])=> {
    const {times, values} = extractTimeAndValueFromDataArray(dataArray);
    const average = getAveragePrice(values);
    const max = getMaxPrice(values);
    const min = getMinPrice(values);

    return {
        times,
        values,   
        average,
        max,
        min,
    };
}

export const example = (time: number)=> {
  // Unix timestamp value
  const unixTimestamp = 1708778339;

  // Convert Unix timestamp to a human-readable date
  const formattedDate = dayjs.unix(unixTimestamp).format('YYYY-MM-DD HH:mm:ss');
  console.log(formattedDate);
}

export const formatTime = (time: number): string => {
    return dayjs.unix(time).format("MM/DD/YY");
}


export const convertToDateAndMonth = (itemDate: string) => {
	const date = new Date(itemDate);
	const day = date.getDate();
	const month = date.toLocaleString('en-US', { month: 'short' });
	return `${day} ${month}`;
  };


