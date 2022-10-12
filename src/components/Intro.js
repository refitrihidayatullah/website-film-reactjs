import { Container, Row, Col, Button } from "react-bootstrap";
const intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex align-items-center justify-content-center">
        <Row>
          <Col>
            <h1 className="title-intro">Nonton Film Gak pake Bayar!!</h1>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default intro;
