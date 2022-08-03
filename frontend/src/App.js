import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./comps/Search";
import GameDetails from "./comps/GameDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Search />} />
      <Route path="/id/:gameId" element={<GameDetails gameIdx="271590" />} />
    </Routes>
  );
}

export default App;
