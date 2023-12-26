import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = ({ arr = [], currency, days }) => {
  const price = [];
  const date = [];
  const [colorChart, setColorChart] = useState("rgb(0, 171, 0)");
  const [bgColorChart, setBgColorChart] = useState("rgb(0, 171, 0,0.5)");
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (days === "24h") {
      date.push(new Date(arr[i][0]).toLocaleTimeString());
    } else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }
    price.push(arr[i][1]);
  }
  console.log(arr);
  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: price,
        borderColor: `${colorChart}`,
        backgroundColor: `${bgColorChart}`,
      },
    ],
  };
  //   console.log(arr[n - 1][1] - arr[0][1]);
  //   if (arr[n - 1][1] - arr[0][1] > 0) {
  //     setColorChart("rgb(0, 171, 0)");
  //     setBgColorChart("rgb(0, 171, 0,0.5)");
  //   } else {
  //     setColorChart("rgb(203, 0, 0)");
  //     setBgColorChart("rgb(203, 0, 0,0.5)");
  //   }
  return (
    <Line
      options={{ responsive: true, maintainAspectRatio: false }}
      data={data}
    />
  );
};

export default Chart;
