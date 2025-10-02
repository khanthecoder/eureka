import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Mock data for testing
    const mockData = {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      cumulativeRandomizations: [100, 200, 300, 400, 500],
      meanNewRandomizations: [10, 20, 30, 40, 50],
      p75NewRandomizations: [15, 25, 35, 45, 55],
    };
    setChartData(mockData);
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Eureka - Dashboard</h1>
      <Chart 
        chartType="line" 
        title="Enrollment Metrics Over Time"
        xAxisLabel="Months"
        yAxisLabel="Number of Patients"
        legendData={['Cumulative Randomizations', 'Mean New Randomizations', 'P75 New Randomizations']}
        data={{
          xAxisData: chartData.months,
          series: [
            { name: 'Cumulative Randomizations', data: chartData.cumulativeRandomizations },
            { name: 'Mean New Randomizations', data: chartData.meanNewRandomizations },
            { name: 'P75 New Randomizations', data: chartData.p75NewRandomizations },
          ],
        }}
      />
    </div>
  );
}

export default App;
