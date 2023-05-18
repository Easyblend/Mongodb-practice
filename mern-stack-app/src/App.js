import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Deposit } from "./Pages/Deposit";
import { Withdrawal } from "./Pages/Withdrawal";
import { History } from "./Pages/History";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="" className="navbar-brand" href="#">
            Finance Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" href="#">
                  Deposits
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/withdrawal" className="nav-link" href="#">
                  Withdrawals
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/history" className="nav-link" href="#">
                  Transaction History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Deposit />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
