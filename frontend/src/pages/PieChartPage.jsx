import React, { useEffect, useState } from "react";
import { getPieChartData } from "../api/api";

export default function PieChartPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getPieChartData();
    setData(res);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        flexDirection: "column",
      }}
    >
      <h1>🥧 Pie Chart Data</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          marginTop: "20px",
          width: "60%",
          textAlign: "center",
          background: "#ffffff10",
          backdropFilter: "blur(8px)",
          borderRadius: "8px",
        }}
      >
        <thead>
          <tr>
            <th>Price</th>
            <th>Items Count</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>₹{item.price}</td>
              <td>{item._count?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}