import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

function SalesChart() {
  const data = {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [0, 20000, 10000, 30000, 15000, 40000, 20000, 60000],
        borderColor: "#5e72e4",
        backgroundColor: "transparent",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#ced4da" } },
      y: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: {
          color: "#ced4da",
          callback: (value) => `$${value / 1000}k`,
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 p-6 rounded-xl shadow-lg text-white">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm uppercase opacity-80">Overview</p>
          <h2 className="text-xl font-semibold">Sales value</h2>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-indigo-500 rounded-md text-sm">
            Month
          </button>
          <button className="px-3 py-1 bg-white text-indigo-600 rounded-md text-sm">
            Week
          </button>
        </div>
      </div>

      <Line data={data} options={options} height={100} />
    </div>
  );
}



export default SalesChart;
