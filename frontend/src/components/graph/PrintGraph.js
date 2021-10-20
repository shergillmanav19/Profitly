import { React } from "react";
// import { Line } from "react-chartjs-2";
import "./styles/graph.css";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Text,
} from "recharts";
import { format, parseISO } from "date-fns";

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p style={{ fontWeight: "bold" }}>
          Date: {format(parseISO(label), "eeee, d MMM, yyyy")}
        </p>
        <p style={{ fontWeight: "bold" }}>
          Portfolio Value:{" "}
          <span style={{ color: "orange" }}>
            ${payload[0].value.toFixed(0)} CAD
          </span>
        </p>
        <p style={{ fontWeight: "bold" }}>
          Initial Deposit:{" "}
          <span style={{ color: "black" }}>
            {" "}
            ${payload[0].payload.netDeposit.toFixed(0)} CAD{" "}
          </span>
        </p>
      </div>
    );
  }
  return null;
}
export default function PrintGraph({ data, selectedButton, netDeposit }) {
  const range = data.map((obj) => obj.value);
  const min = Math.floor(Math.min(...range));
  const max = Math.ceil(Math.max(...range));

  return (
    <ResponsiveContainer width="100%" height={550}>
      <AreaChart
        margin={{
          top: 15,
          left: 15,
          right: 15,
          bottom: 0,
        }}
        data={data}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5DA271" stopOpacity={0.2} />
            <stop offset="90%" stopColor="#f9f8f7" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area
          dataKey="value"
          type="monotone"
          stroke="#5DA271"
          fill="url(#color)"
        />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={() => {
            return "";
          }}
        />

        <YAxis
          datakey="value"
          axisLine={false}
          tickLine={false}
          tickFormatter={(number) =>
            `$${Number(number.toFixed(0)).toLocaleString("en")}`
          }
          domain={[min, max]}
        />

        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
