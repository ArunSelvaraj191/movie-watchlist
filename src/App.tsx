import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SuspenseLoader from "./SuspenseLoader";

const Login = SuspenseLoader(lazy(() => import("./components/Login")));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
