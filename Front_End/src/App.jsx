import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./containers/StartPage/index";
import HomePage from "./containers/HomePage/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/HomePage" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
