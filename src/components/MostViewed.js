import { Card, Col, Container, Row, Image } from "react-bootstrap";
import bleachImg from "../assets/images/mostviewed/bleach.jpg";
import hxhImg from "../assets/images/mostviewed/hxh.jpg";
import onepieceImg from "../assets/images/mostviewed/onepiece.jpg";
import overloadImg from "../assets/images/mostviewed/overload.jpg";
import saoImg from "../assets/images/mostviewed/sao.jpg";
import yournameImg from "../assets/images/mostviewed/yourname.jpg";

const MostViewed = () => {
  return (
    <div>
      <Container>
        <br id="mostviewed" />
        <br />
        <h1 className="text-white text-center">MOST VIEWED ANIME</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={bleachImg} alt="Bleach" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BLEACH</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={hxhImg} alt="HxH" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Hunter X Hunter</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={onepieceImg} alt="One Piece" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">One Piece</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={overloadImg} alt="Overload" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Overload</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={saoImg} alt="SAO" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Sword Art Online</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={yournameImg} alt="Your Name" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Kimi No Nawa</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MostViewed;
