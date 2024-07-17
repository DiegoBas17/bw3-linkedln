import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import TopNavbar from "./components/TopNavbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserAction } from "./redux/actions/getUserAction";
import HomePage from "./components/HomePage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:_id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
