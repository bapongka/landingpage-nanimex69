import { Card, Col, Container, Row, Image } from "react-bootstrap";
import spyImg from "../assets/images/trending/spyxfamily.jpg";
import aotImg from "../assets/images/trending/aot.jpg";
import jujutsuImg from "../assets/images/trending/jujutsu.jpg";
import kaguyaImg from "../assets/images/trending/kaguya.jpg";
import kimetsuImg from "../assets/images/trending/kimetsu.jpg";
import mushokuImg from "../assets/images/trending/mushoku.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br id="trending" />
        <br />
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={spyImg} alt="SPY x FAMILY" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPY x FAMILY</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={aotImg} alt="AoT" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Attack on Titan</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={jujutsuImg} alt="Jujutsu" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={kaguyaImg} alt="Kaguya" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Kaguya-sama</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={kimetsuImg} alt="Kimetsu" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Kimetsu no Yaiba</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImg">
              <Image src={mushokuImg} alt="Mushoku" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Mushoku Tensei</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
