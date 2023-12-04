import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Colors } from "../../../utils/chartColors";
import styles from "./PieChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps<T> {
  data: T[];
  legend: string;
  labelField: keyof T;
  valueField: keyof T;
}

export default function PieChart<T>({
  data,
  legend,
  labelField,
  valueField,
}: PieChartProps<T>) {
  return (
    <div className={styles.container}>
      <Pie
        data={{
          labels: data.map((d) => d[labelField]),
          datasets: [
            {
              label: legend,
              data: data.map((d) => d[valueField]),
              backgroundColor: Colors.slice(0, data.length),
              borderColor: Colors.slice(0, data.length),
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}
