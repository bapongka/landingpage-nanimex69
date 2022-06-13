import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
// import bleachImg from "../assets/images/mostviewed/bleach.jpg";
// import hxhImg from "../assets/images/mostviewed/hxh.jpg";
// import onepieceImg from "../assets/images/mostviewed/onepiece.jpg";
// import overloadImg from "../assets/images/mostviewed/overload.jpg";
// import saoImg from "../assets/images/mostviewed/sao.jpg";
// import yournameImg from "../assets/images/mostviewed/yourname.jpg";

const MostViewed = () => {
  const [anime, setAnime] = useState([]);
  const getAnime = async () => {
    try {
      const response = await axios.get("https://anitop.vercel.app/api/v1/top-anime");
      setAnime(response.data.data);
      console.log(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <Container>
        <br id="mostviewed" />
        <br />
        <h1 className="text-white text-center">MOST VIEWED ANIME</h1>
        <br />
        <Row>
          {anime.slice(0, 6).map((nanime, index) => {
            return (
              <Col md={4} className="movieWrapper" key={index}>
                <Card className="movieImg">
                  <Image src={nanime.imageUrl} alt="Bleach" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">{nanime.title}</Card.Title>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MostViewed;
