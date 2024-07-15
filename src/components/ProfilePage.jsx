import { Col, Container, Row } from "react-bootstrap";
import CentralProfile from "./CentralProfile";
import ProfileRightSidebar from "./ProfileRightSidebar";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <CentralProfile />
        </Col>
        <Col md={3}>
          <ProfileRightSidebar />
        </Col>
      </Row>
    </Container>
  );
};
export default ProfilePage;
