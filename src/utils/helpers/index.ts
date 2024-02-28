export const extractTimeAndValueFromDataArray = (dataArray: IGraph[]): [number[], number[]] => {
    const times: number[] = [];
    const values: number[] = [];

    dataArray?.forEach((data) => {
        times.push(data.time);
        values.push(data.value);
    });

    return [times, values];
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

export const getGraphData = (dataArray: IGraph[]): IGraphResults => {
    const [times, values] = extractTimeAndValueFromDataArray(dataArray);
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