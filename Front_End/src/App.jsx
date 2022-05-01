import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./containers/StartPage/index";
import HomePage from "./containers/HomePage/index";
import PlayPage from "./containers/PlayPage/index";
import CharacterPage from "./containers/CharacterPage/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/PlayPage" element={<PlayPage />} />
          <Route exact path="/CharacterPage" element={<CharacterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
