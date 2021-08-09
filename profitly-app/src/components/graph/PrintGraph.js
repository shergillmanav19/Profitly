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
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
function giveMeTickCount(selectedButton) {
  switch (selectedButton) {
    case "1d":
      return 8;
    case "1w":
      return 2;
    case "1m":
      return 10;
    case "3m":
      return 3;
    case "1y":
      return 6;
    case "all":
      return 6;
    default:
      break;
  }
}
function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>Date: {format(parseISO(label), "eeee, d MMM, yyyy")}</p>
        <p>Portfolio Value: ${payload[0].value.toFixed(2)} CAD</p>
      </div>
    );
  }
  return null;
}
export default function PrintGraph({ data, selectedButton }) {
  const range = data.map((obj) => obj.value);
  const min = Math.floor(Math.min(...range));
  const max = Math.ceil(Math.max(...range));

  return (
    <ResponsiveContainer width="100%" height={550}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.2} />
            <stop offset="90%" stopColor="#f9f8f7" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

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
