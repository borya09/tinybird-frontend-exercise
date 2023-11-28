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
import styles from "./LineChart.module.css";
import { Colors } from "../../../utils/chartColors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  datasets: {
    label: string;
    data: number[];
  }[];
  xLabels: string[];
}

export default function LineChart({ datasets, xLabels }: LineChartProps) {
  return (
    <div className={styles.container}>
      <Line
        data={{
          labels: xLabels,
          datasets: datasets.map((d, i) => ({
            ...d,
            borderColor: Colors[i],
            backgroundColor: Colors[i],
          })),
        }}
        options={{
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
        }}
      />
    </div>
  );
}
