const API_BASE_URL = "http://localhost:5000";

// Fetch all transactions
export const getTransactions = async () => {
  const res = await fetch(`${API_BASE_URL}/api/transactions`);
  return res.json();
};

// Statistics API
export const getStatistics = async () => {
  const res = await fetch(`${API_BASE_URL}/api/statistics`);
  return res.json();
};

// Bar chart data
export const getBarChartData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/barchart`);
  return res.json();
};

// Pie chart data
export const getPieChartData = async () => {
  const res = await fetch(`${API_BASE_URL}/api/piechart`);
  return res.json();
};