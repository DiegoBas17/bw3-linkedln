import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CentralMainHome from "./components/CentralMainHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<CentralMainHome />} />
        <Route path="/profile/:_id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
