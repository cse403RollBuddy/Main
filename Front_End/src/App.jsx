import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./containers/StartPage/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
