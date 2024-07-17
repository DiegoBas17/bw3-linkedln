import { Container, Row } from "react-bootstrap";
import CentralMain from "./CentralMainHome";
import HomepageLeftSidebar from "./HomePageLeftSidebar";
import LinkedInNotizie from "./LinkedInNotizie";

const HomePage = () => {
  return (
    <Container className="mt-3">
      <Row className="g-4">
        <HomepageLeftSidebar />
        <CentralMain />
        <LinkedInNotizie />
      </Row>
    </Container>
  );
};
export default HomePage;
