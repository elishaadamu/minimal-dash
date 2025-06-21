import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { csv } from "d3";

const CHART_COLORS = [
  "#1565C0", // darker blue
  "#C62828", // darker red
  "#2E7D32", // darker green
  "#6A1B9A", // darker purple
];

const LOCATIONS = [
  { value: "dvrpc", label: "DVRPC" },
  { value: "bucks", label: "Bucks" },
  { value: "burlington", label: "Burlington" },
  { value: "camden", label: "Camden" },
  { value: "chester", label: "Chester" },
  { value: "delaware", label: "Delaware" },
  { value: "gloucester", label: "Gloucester" },
  { value: "mercer", label: "Mercer" },
  { value: "montgomery", label: "Montgomery" },
  { value: "philadelphia", label: "Philadelphia" },
];

const VIEW_TYPES = [
  { value: "total", label: "Total Formations" },
  { value: "percentage", label: "Percentage Change" },
];

const BusinessFormation = ({ dataPath, config }) => {
  const [data, setData] = React.useState([]);
  const [hiddenSeries, setHiddenSeries] = React.useState(new Set());
  const [selectedLocation, setSelectedLocation] = React.useState("dvrpc");
  const [viewType, setViewType] = React.useState("total");

  React.useEffect(() => {
    csv(dataPath).then((csvData) => {
      const processedData = csvData.map((row) => ({
        year: row.year,
        total: parseFloat(row[`${selectedLocation}_total`]) || 0,
        percentage: parseFloat(row[`${selectedLocation}_cumu_perc_chng`]) || 0,
      }));
      setData(processedData);
    });
  }, [dataPath, selectedLocation]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleViewTypeChange = (event) => {
    setViewType(event.target.value);
  };

  const selectStyle = {
    padding: "0.5rem",
    marginRight: "1rem",
    borderRadius: "4px",
    border: "1px solid #9E9E9E",
    backgroundColor: "#E3F2FD",
    cursor: "pointer",
    color: "#000000",
    fontWeight: "500",
  };

  const CustomTooltip = ({ active, payload, label, viewType }) => {
    if (!active || !payload) return null;

    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #666666",
          borderRadius: "4px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          padding: "10px",
          fontSize: "12px",
        }}
      >
        <p
          style={{ margin: "0 0 5px 0", fontWeight: "bold", color: "#000000" }}
        >
          {label}
        </p>
        {payload.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "3px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: entry.color,
                borderRadius: "2px",
                marginRight: "5px",
              }}
            />
            <span style={{ color: "#000000" }}>
              {entry.name}:{" "}
              {viewType === "percentage"
                ? `${(entry.value * 100).toFixed(1)}%`
                : Number(entry.value).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}
      >
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          style={selectStyle}
        >
          {LOCATIONS.map((loc) => (
            <option key={loc.value} value={loc.value}>
              {loc.label}
            </option>
          ))}
        </select>

        <select
          value={viewType}
          onChange={handleViewTypeChange}
          style={selectStyle}
        >
          {VIEW_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="90%" height={400}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{ backgroundColor: "white" }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" fill="white" />

          <XAxis
            dataKey="year"
            tick={{ fill: "#000000", fontSize: 12 }}
            stroke="#666666"
            tickLine={{ stroke: "#666666" }}
          />

          <YAxis
            yAxisId="left"
            domain={viewType === "percentage" ? [-0.5, 3.5] : ["auto", "auto"]}
            tick={{ fill: "#000000", fontSize: 12 }}
            stroke="#666666"
            tickLine={{ stroke: "#666666" }}
            label={{
              value:
                viewType === "percentage"
                  ? "Percentage Change"
                  : "Total Formations",
              angle: -90,
              position: "insideLeft",
              offset: 10,
            }}
          />

          <Tooltip content={<CustomTooltip viewType={viewType} />} />
          <Legend />

          <Bar
            dataKey={viewType}
            fill={CHART_COLORS[0]}
            name={
              viewType === "percentage"
                ? "Percentage Change"
                : "Total Formations"
            }
            yAxisId="left"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BusinessFormation;
