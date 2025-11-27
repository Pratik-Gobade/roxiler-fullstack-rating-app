import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TransactionsPage from "./pages/TransactionsPage";
import StatisticsPage from "./pages/StatisticsPage";
import BarChartPage from "./pages/BarChartPage";
import PieChartPage from "./pages/PieChartPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<TransactionsPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/barchart" element={<BarChartPage />} />
        <Route path="/piechart" element={<PieChartPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;