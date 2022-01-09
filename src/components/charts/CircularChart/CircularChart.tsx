import { useState } from "react";
import { Circle, Input, Label } from "./CircularChart.styled";

interface CircularChartProps {
  progress: number;
}

export const CircularChart: React.FC<CircularChartProps> = ({ progress }) => {
  const [value, setValue] = useState(progress);
  const strokeWidth = 10;
  const coordinate = 75;
  const normalizedRadius = coordinate - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="App">
      <Label>
        Set the progress bar{" "}
        <Input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setValue(+e.target.value)}
          value={value}
        />
        %
      </Label>
      <svg height={250} width={250} viewBox="0 0 200 100">
        <Circle
          stroke="yellow"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={coordinate}
          cy={coordinate}
        />
        <text
          x="125"
          y="75"
          text-anchor="middle"
          dy="7"
          font-size="20"
          fill="#000"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};
