import { Card, Col, Row } from "react-bootstrap";
import {
  BookmarkFill,
  Calendar3,
  PeopleFill,
  Plus,
  SquareHalf,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const HomepageLeftSidebar = () => {
  const userMe = useSelector((state) => state.user.userObj);
  const userSelected = useSelector((state) => state.otherUsers.userSelected);
  const user = userSelected ? userSelected : userMe;
  return (
    <>
      {user && (
        <Col md={3}>
          <Card className="leftSidebar">
            <Card.Img
              variant="top"
              className="imgBackground"
              src="https://media.licdn.com/dms/image/D4D16AQF7ByGyAQKP-w/profile-displaybackgroundimage-shrink_350_1400/0/1714930916758?e=1726704000&v=beta&t=siLnRYZkPUVTQiJBfr4CFBHVw0FGxN8b52ftOXkIV_o"
            />
            <Row className="leftSidebarPicture">
              <img
                src={user.image}
                alt="imgProfile"
                className="rounded-circle"
              />
            </Row>
            <Card.Body className="leftSidebarBody">
              <Card.Title className="text-center textProfile">
                {user.name} {user.surname}
                <p className="leftSidebarSubtitle1 text-black mt-2">
                  {user.title}
                </p>
                <p className="leftSidebarSubtitle2">{user.area}</p>
                <button className="profile-card-add-experience-button text-body-xsmall">
                  <Plus />
                  <span>Esperienza</span>
                </button>
                <div className=" display-flex align-items-center"></div>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="leftSidebar mt-3">
            <div className="p-2">
              <p className="leftSidebarSubtitle2 pt-2">
                Acquisisci nuove competenze con Premium
              </p>
              <SquareHalf fill="orange" />
              <span className="ps-2 text-black">Prova premium per 0 eur</span>
            </div>
          </Card>
          <Card className="leftSidebar mt-3 ps-2">
            <Card.Text className="pt-2 leftSidebarCounters text-black ">
              Visitatori del profilo <span> 1 </span>
            </Card.Text>
            <Card.Text className="leftSidebarCounters text-black ">
              Collegamenti <span> 50 </span>
            </Card.Text>
            <p className="expands">Espandi la tua rete</p>
            <hr />
            <div className="iconsText">
              <BookmarkFill />
              <p className="leftSidebarSubtitle1 text-black">
                Elementi Salvati
              </p>
            </div>
            <div className="iconsText">
              <PeopleFill />
              <p className="leftSidebarSubtitle1 text-black">Gruppi</p>
            </div>
            <div className="iconsText">
              <Calendar3 />
              <p className="leftSidebarSubtitle1 text-black">Eventi</p>
            </div>
          </Card>
        </Col>
      )}
    </>
  );
};

export default HomepageLeftSidebar;
