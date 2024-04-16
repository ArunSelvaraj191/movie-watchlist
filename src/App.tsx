import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SuspenseLoader from "./SuspenseLoader";
import Watchlist from "./components/WatchLists";

const Login = SuspenseLoader(lazy(() => import("./components/Login")));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
