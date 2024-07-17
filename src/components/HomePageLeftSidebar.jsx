import { Card, Col, Row } from "react-bootstrap";
import {
  BookmarkFill,
  Calendar3,
  PeopleFill,
  Plus,
  SquareHalf,
} from "react-bootstrap-icons";

const HomepageLeftSidebar = () => {
  return (
    <Col md={3}>
      <Card className="leftSidebar">
        <Card.Img
          variant="top"
          className="imgBackground"
          src="https://plus.unsplash.com/premium_photo-1720519666567-f7dbdcde83a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
        />
        <Row className="leftSidebarPicture">
          <img
            src="https://media.licdn.com/dms/image/C5103AQE3z-CoBxoWrQ/profile-displayphoto-shrink_100_100/0/1517284059454?e=1726704000&v=beta&t=pIylPlCW6OlQaXQo6dBZGY6Vb9YYpv3jjV9Gl6Ssspw"
            alt="giorgia-profile"
            className="rounded-circle"
          />
        </Row>
        <Card.Body className="leftSidebarBody">
          <Card.Title className="text-center textProfile">
            Giorgia Ipsaro Passione
            <p className="leftSidebarSubtitle1 text-black mt-2">
              Photographer, VideoMaker
            </p>
            <p className="leftSidebarSubtitle2">Capo d&rsquo;Orlando, Sicily</p>
            <button className="profile-card-add-experience-button text-body-xsmall">
              {" "}
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
          <p className="leftSidebarSubtitle1 text-black">Elementi Salvati</p>
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
  );
};

export default HomepageLeftSidebar;
