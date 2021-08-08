import { React, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function PrintGraph({ labels, datasets }) {
  return (
    <div>
      <Line
        className="graph-display"
        options={{
          responsive: true,
          //this turns the label display off
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
    </div>
  );
}
