import { Col, Container, Row,Button } from "react-bootstrap"

const Intro=()=>{
return(
    <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-item-center">
            <Row>
                <Col>
                <div className="title">STREAMING</div>
                <div className="title">ANIME SEPUASNYA</div>
                <div className="introButton mt-4 ">
                    <Button variant="dark">Lihat List Anime</Button>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default Intro