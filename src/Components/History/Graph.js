import React, { useLayoutEffect } from "react";
import useState from "react-usestateref";

import graphBorderColour from "../Utils/graphBorderColour";
import graphBackgroundColour from "../Utils/graphBackgroundColour";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Graph(props) {
  const [filteredPrices, setFilteredPrices] = useState(0);
  const [filteredDates, setFilteredDates] = useState(0);

  useLayoutEffect(() => {
    setFilteredPrices(
      Object.entries(props.graph)
        .filter((row) => row["0"] >= props.search)
        .reverse()
        .map((row) => row["1"]["4. close"]),
      setFilteredDates(
        Object.entries(props.graph)
          .filter((row) => row["0"] >= props.search)
          .reverse()
          .map((row) => row["0"])
      )
    );
  }, [props.search]);

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${props.profile.Name} Closing Prices`,
      },
    },
  };

  let data = {
    labels: filteredDates,
    datasets: [
      {
        label: "Closing Prices",
        data: filteredPrices,
        fill: true,
        borderColor: graphBorderColour(props.changes),
        tension: 0.1,
        backgroundColor: graphBackgroundColour(props.changes),
        pointBackgroundColor: graphBorderColour(props.changes),
      },
    ],
  };
  return (
    <span>
      <Line options={options} data={data} />
      </span>
  );
}
