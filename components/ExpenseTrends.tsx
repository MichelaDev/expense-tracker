"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ExpensesTrend = ({ data }: { data: { [key: string]: number } }) => {
  const dataModified = Object.values(data);
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total expenses",
        data: dataModified,
        backgroundColor: "#4F46E5",
        borderColor: "#4F46E5",
        tension: 0.2,
      },
    ],
  };
  return (
    // <div className="min-h-80">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    // </div>
  );
};

export default ExpensesTrend;
