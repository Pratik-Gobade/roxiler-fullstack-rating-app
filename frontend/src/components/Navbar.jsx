import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Transactions</Link>
      <Link style={styles.link} to="/statistics">Statistics</Link>
      <Link style={styles.link} to="/barchart">Bar Chart</Link>
      <Link style={styles.link} to="/piechart">Pie Chart</Link>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "20px",
    background: "#222",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
  },
};