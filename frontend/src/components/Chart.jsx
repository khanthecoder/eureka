import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const Chart = ({ chartType, data, title, xAxisLabel, yAxisLabel, legendData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: title,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: legendData,
      },
      xAxis: {
        type: 'category',
        data: data.xAxisData, // Array of x-axis data (e.g., months)
        name: xAxisLabel,
      },
      yAxis: {
        type: 'value',
        name: yAxisLabel,
      },
      series: data.series.map((seriesData) => ({
        name: seriesData.name,
        type: chartType, // Dynamic chart type (line, bar, etc.)
        data: seriesData.data, // Series data for this chart
      })),
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data, chartType, title, xAxisLabel, yAxisLabel, legendData]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default Chart;
