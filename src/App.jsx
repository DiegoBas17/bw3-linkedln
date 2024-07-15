import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CentralMainHome from "./components/CentralMainHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/centralhome" element={<CentralMainHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
