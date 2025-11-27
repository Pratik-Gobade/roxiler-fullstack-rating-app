import React, { useEffect, useState } from "react";
import { getStatistics } from "../api/api";

export default function StatisticsPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getStatistics();
      setStats(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching stats", err);
      setLoading(false);
    }
  };

  if (loading) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;

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
      <h1>📈 Statistics</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "25px",
          width: "350px",
          background: "#ffffff15",
          backdropFilter: "blur(12px)",
          borderRadius: "10px",
          fontSize: "18px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <p><b>💰 Total Sale Amount:</b> ₹{stats.totalSaleAmount}</p>
        <p><b>🟢 Total Sold Items:</b> {stats.totalSold}</p>
        <p><b>🔴 Total Not Sold Items:</b> {stats.totalNotSold}</p>
      </div>
    </div>
  );
}