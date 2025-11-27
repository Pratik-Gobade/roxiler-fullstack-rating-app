import React, { useEffect, useState } from "react";
import { getTransactions } from "../api/api";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading transactions:", error);
      setLoading(false);
    }
  };

  if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📄 Transactions Table</h1>

      <table 
        border="1" 
        cellPadding="10" 
        width="100%" 
        style={{ marginTop: "20px", borderCollapse: "collapse" }}
      >
        <thead style={{ background: "#f17575ff" }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Date Of Sale</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.sold ? "Yes" : "No"}</td>
              <td>{new Date(item.dateOfSale).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}