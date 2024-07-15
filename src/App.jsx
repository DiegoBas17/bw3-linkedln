import { Container } from "react-bootstrap";
import "./App.css";
import MyRightSidebar from "./components/MyRightSidebar";
import ProfileRightSidebar from "./components/ProfileRightSidebar";

function App() {
  return (
    <Container>
      <ProfileRightSidebar />
      {/* <MyRightSidebar /> */}
    </Container>
  );
}

export default App;
