import LavoroParteCentrale from "./LavoreParteCentrale";
import { Col, Row } from "react-bootstrap";
import JobLeftSidebar from "./JobLeftSidebar";
import JobRightSidebar from "./JobRightSidebar";

const LavoroPage = () => {
  return (
    <Row>
      <Col xl={3}>
        <JobLeftSidebar />
      </Col>
      <Col xl={6}>
        <LavoroParteCentrale />
      </Col>
      <Col xl={3}>
        <JobRightSidebar />
      </Col>
    </Row>
  );
};
export default LavoroPage;
