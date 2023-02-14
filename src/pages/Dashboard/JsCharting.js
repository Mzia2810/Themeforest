import React, { useState } from "react";
import {
  Line,
  Doughnut,
  HorizontalBar,
  Bar,
  Pie,
  Polar,
  Radar
} from "react-chartjs-2";

const OrganizationChart = () => {
  const [chartData, setChartData] = useState({
    labels: ["Manager", "Team Lead", "Developer", "Intern",'CEO','APP developer'],
    datasets: [
      {
        label: "Organization ",
        data: [3, 2, 4, 23,5,7],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(12, 192, 192, 09)",
        ]
      }
    ]
  });

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Organization Chart",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "right"
          }
        }}
      />
    </div>
  );
};

export default OrganizationChart;
